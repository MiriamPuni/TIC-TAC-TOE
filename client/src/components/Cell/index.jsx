import { useEffect, useState } from 'react'
import style from './style.module.scss'

export default function Cell({ width, height, colorCell, children, data, onClick, win }) {
    const [color, setColor] = useState('')

    useEffect(() => {
        if (win) {
            console.log(win, data);
            if (win == 'draw') {
                setColor('#cccccc')
            } else {
                if (win.find(w => w[0] === data[0] && w[1] === data[1])) {
                    console.log(win[0][0], win[0][1], data[0], data[1]);
                    setColor('#C9F9FC')
                } else {
                    setColor('#cccccc')
                }
            }
        }
    }, [win])
    return (
        <div onClick={() => { onClick ? onClick(data[0], data[1]) : null }} style={{ width, height, backgroundColor: win ? color : colorCell }} className={style.Cell}>
            {children}
        </div>
    )
}
