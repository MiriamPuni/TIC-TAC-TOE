import { useState } from 'react'
import style from './style.module.scss'
import User from '../User'

export default function HeaderGame({ userName , width, height, avatar }) {
    const [win, setWin] = useState(false)
    return (
        <div className={style.all}>
            <div className={style.triangle}></div>
            {
                win ? <div className={style.HeaderGame}>{userName} win!!</div>
                    : <div className={style.HeaderGame}><User userName={userName} width={width} height={height} avatar={avatar} />
                    </div>
            }
            <div className={style.triangle2}></div>
        </div>
    )
}
