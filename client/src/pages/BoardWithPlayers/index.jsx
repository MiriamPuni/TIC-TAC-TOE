import React, { useState } from 'react'
import Board from '../../components/Board'
import Cell from '../../components/Cell'
import styles from './style.module.scss'
import apiReq from '../../function/apiReq'
import X from '../../components/X'
import O from '../../components/O'
export default function BoardWithPlayer() {

    let [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
    async function clickCell(row, col){
        let res = await apiReq('', 'put', {row, column :col, board})
        if (res.data.board) setBoard(res.data.board)
        console.log(res.data);
    }

    return (
            <Board width={'300px'} height={'300px'}>
                <div className={styles.cell9}>
                    {board.map((row, i)=> row.map((cell, j)=><Cell key={`${i}${j}`} onClick={clickCell}  data = {[i, j]} width={'82px'} height={'82px'} colorCell={'#C9F9FC'} >{cell == 'X'?<X width={'70%'} height={'70%'}/>:cell == 'O'?<O width={'70%'} height={'70%'}/>: ''}</Cell>))}
                </div>
            </Board>
    )
}
