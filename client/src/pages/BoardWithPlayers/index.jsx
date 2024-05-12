import React, { useState } from 'react'
import Board from '../../components/Board'
import Cell from '../../components/Cell'
import style from './style.module.scss'
import apiReq from '../../function/apiReq'
import X from '../../components/X'
import O from '../../components/O'
import Button from '../../components/Button'
import HeaderGame from '../../components/HeaderGame'
export default function BoardWithPlayer() {

    let [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
    const [player , setPlayer]= useState("X")
    const change=()=>{
        if(player=='X') setPlayer('O')
        else setPlayer('X')
    }

    async function clickCell(row, col) {
        let res = await apiReq('', 'put', { row, column: col, board , player})
        if (res.data.board){
             setBoard(res.data.board)
             change()
            }
        console.log(res.data);
    }



    return (
        <div className={style.BoardWithPlayer}>
            <HeaderGame  userName={"gila"} width={'120px'} height={'120px'} avatar={"https://s3-alpha-sig.figma.com/img/3ad0/5ae1/ddb42a7f2f78e7634eba900a5c0db41d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=igjQfuBtGigIGaMsFpVj9bPNpEAKqqHjleI-Tzh8nhq4ZS047o250NKlU2kSjP6IARrl1pelqgHm1PagCNAh0o1EjVMHB5v2ATb8lDSd8rLzGn3pTUzVzJn0JOz4xVqx39tkjuilURZA4zB7rwsABBhYvGFmDjjupVAjLNIYZSxsOtGBvgEKLMmwJHXsC1ndAVpwlshVGUKxRQJemA9vPEJieBubXsW69XDEOOkSq4lcdrSDrNRkhdvAOLrqK~Ri15DM1sZVe876v6pAmiJf08h~EzImYj9Fb4LbaSDa0nP5onpvWy27NJ-DvIb5y~Dt451IPEvuC15aGgvYqEUhWw__"}/>
            <br /><br /><br /><br /><br />
            <Board width={'330px'} height={'330px'}>
                <div className={style.cell9}>
                    {board.map((row, i) => row.map((cell, j) => <Cell key={`${i}${j}`} onClick={clickCell} data={[i, j]} width={'90px'} height={'90px'} colorCell={'#C9F9FC'} >{cell == 'X' ? <X width={'80%'} height={'80%'} /> : cell == 'O' ? <O width={'80%'} height={'80%'} /> : ''}</Cell>))}
                </div>
            </Board>
            <br /><br /><br />
            <Button content={"Back"} />
        </div>
    )
}
