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
    async function clickCell(row, col){
        let res = await apiReq('', 'put', {row, column :col, board})
        if (res.data.board) setBoard(res.data.board)
        console.log(res.data);
    }

    return (
        <div className={style.BoardWithPlayer}>
<HeaderGame userName={"gila"}/>
            <Board width={'400px'} height={'400px'}>
                <div className={style.cell9}>
                    {board.map((row, i)=> row.map((cell, j)=><Cell key={`${i}${j}`} onClick={clickCell}  data = {[i, j]} width={'110px'} height={'110px'} colorCell={'#C9F9FC'} >{cell == 'X'?<X width={'80%'} height={'80%'}/>:cell == 'O'?<O width={'80%'} height={'80%'}/>: ''}</Cell>))}
                </div>
            </Board>
            <Button content={"Back"}/>
        </div>
    )
}
