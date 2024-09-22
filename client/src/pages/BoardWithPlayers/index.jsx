import React, { useContext, useEffect, useState } from 'react'
import Board from '../../components/Board'
import Cell from '../../components/Cell'
import style from './style.module.scss'
import apiReq from '../../function/apiReq'
import X from '../../components/X'
import O from '../../components/O'
import Button from '../../components/Button'
import HeaderGame from '../../components/HeaderGame'
import useSocket from '../../socket'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'

export default function BoardWithPlayer({winnerName, setWinnerName, winnerImg, setWinnerImg, win, setWin, player, setPlayer, playerWins, setPlayerWins, opponentWins, setOpponentWins }) {
    const { user, setUser } = useContext(DataContext)
    const { play } = user;
    // const [notActive, setNotActice] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const nav = useNavigate()


    useEffect(() => {
        // נוודא שהשחקן הראשון הוא המשתמש הנוכחי
        setPlayer(play=='X' ? 'X' : 'O');
    }, [play, setPlayer]);

    // const socket = useSocket()
    // useEffect(()=>{
    //     socket.on('connection', (msg)=>console.log(msg))
    // },[])

    let [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
    async function clickCell(row, col) {
        if (gameOver || board[row][col] !== '') return; // בדיקה אם המשחק נגמר או שהמשבצת כבר תפוסה

        // עדכון מיידי של הלוח בסטייט
        const updatedBoard = board.map((r, i) => r.map((cell, j) => {
            if (i === row && j === col) return player;
            return cell;
        }));

        // עדכון הלוח בסטייט מיידית
        setBoard(updatedBoard);
        change(); // שינוי השחקן מיידית

        // שליחת בקשה לשרת עם הלוח המעודכן
        let res = await apiReq('', 'put', { row, column: col, board: updatedBoard, player });

        // אם השרת מחזיר לוח חדש או ניצחון, עדכן את הלוח מחדש
        if (res.data.board) {
            setBoard(res.data.board);
        }

        // אם יש ניצחון, עדכן את סטייט הניצחון וסמן שהמשחק נגמר
        if (res.data.win) {
            setWin(res.data.win);
            setGameOver(true);
        }

        console.log('🎉🎉', res.data);
    }

    console.log("user", user);



    const colorChar = (data) => {
        if (win) {
            if (win == 'draw') {
                return true
            } else {
                if (win.find(w => w[0] === data[0] && w[1] === data[1])) {
                    return false
                } else {
                    return true
                }
            }
        }
    }

    const change = () => {
        setPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));

        // if (player == 'X') setPlayer('O')
        // else setPlayer('X')
    }

    return (
        <div className={style.BoardWithPlayer}>
            <HeaderGame winnerImg={winnerImg} setWinnerImg={setWinnerImg} winnerName={winnerName} setWinnerName={setWinnerName} playerWins={playerWins} setPlayerWins={setPlayerWins} opponentWins={opponentWins} setOpponentWins={setOpponentWins} win={win} setWin={setWin} userName={user.userName} player={player} setPlayer={setPlayer} width={'120px'} height={'120px'} />
            <br /><br /><br /><br /><br />
            <Board width={'330px'} height={'330px'}>
                <div className={style.cell9}>
                    {board.map((row, i) => row.map((cell, j) => <Cell win={win} key={`${i}${j}`} onClick={clickCell} data={[i, j]} width={'90px'} height={'90px'} colorCell={'#C9F9FC'} >{cell == 'X' ? <X notActive={colorChar([i, j])} width={win ? colorChar([i, j]) ? '80%' : '100%' : '80%'} height={win ? colorChar([i, j]) ? '80%' : '100%' : '80%'} /> : cell == 'O' ? <O notActive={colorChar([i, j])} width={win ? colorChar([i, j]) ? '80%' : '100%' : '80%'} height={win ? colorChar([i, j]) ? '80%' : '100%' : '80%'} /> : ''}</Cell>))}
                </div>
            </Board>
            <br /> <br />
            {
                win == 'draw' || win ?
                    <div className={style.buttonFinish}>
                        <div onClick={() => { nav(-1); setGameOver(false); setWin(false); }}>
                            <Button content={"Play Again"} />
                        </div>
                        <div onClick={() => nav('/FinishedGame')}>
                            <Button content={"FINISH GAME"} fontSize={'25px'} />
                        </div>
                    </div>
                    :
                    <div onClick={() => { nav(-1) }}>
                        <Button content={"Back"} />
                    </div>
            }
        </div>
    )
}
