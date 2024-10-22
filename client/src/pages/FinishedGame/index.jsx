import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'
import Button from '../../components/Button'
import HeaderGame from '../../components/HeaderGame'
import Title from '../../components/Title'
import style from './style.module.scss'

export default function FinishedGame({ winnerName, setWinnerName, winnerImg, setWinnerImg, width, height, avatar, win, setWin, player, setPlayer, playerWins, setPlayerWins, opponentWins, setOpponentWins }) {
    const { user, setUser } = useContext(DataContext)
    const { img, img2, userName, userName2, play, play2 } = user
    const imgAnonimy = "anonimy.png"

    const playAgain = () => {
        nav('/Menu');
        setWin(false);
        setPlayer('X');  // Resets to player X
        setPlayerWins(0);
        setOpponentWins(0);
        setUser(user => ({ ...user, userName: "", img: "", play: "", userName2: "", img2: "", play2: "" }))
    }
    const nav = useNavigate()

    useEffect(() => {
        if (playerWins > opponentWins) {
            setWinnerName(userName || 'PLAYER 1');
            setWinnerImg(img || imgAnonimy);
        }
        if (opponentWins > playerWins) {
            setWinnerName(userName2 || 'PLAYER 2');
            setWinnerImg(img2 || imgAnonimy);
        }
    }, [playerWins, opponentWins, userName, userName2, img, img2]);


    return (
        <div className={style.ChoosePlayer}>
            <HeaderGame winnerImg={winnerImg} setWinnerImg={setWinnerImg} winnerName={winnerName} setWinnerName={setWinnerName} playerWins={playerWins} setPlayerWins={setPlayerWins} opponentWins={opponentWins} setOpponentWins={setOpponentWins} win={win = false} setWin={setWin} userName={user.userName} player={player} setPlayer={setPlayer} width={'120px'} height={'120px'}>

                <img src={winnerImg} alt="" />
            </HeaderGame>
            <div className={style.withoutbuttonback}>
                {
                    playerWins !== opponentWins ? (
                        <div>
                            <Title content={`${winnerName ? winnerName : playerWins > opponentWins ? 'PLAYER 1' : 'PLAYER 2'} WON!!`} fontSize={'45px'} />
                            <div className={style.minititle}>
                                <Title content={`WITH ${playerWins > opponentWins ? playerWins : opponentWins} WINS`} fontSize={'35px'} />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Title content={`DRAW!`} fontSize={'70px'} />
                        </div>
                    )
                }
            </div>
            <div onClick={playAgain} className={style.ButtonPlayAgain}>
                <Button content={"PLAY AGAIN"} />
            </div>
        </div>
    )
}
