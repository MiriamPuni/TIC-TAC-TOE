import React from 'react'
import Logo from '../../components/Logo'
import O from '../../components/O'
import X from '../../components/X'
import style from './style.module.scss'


export default function Welcome() {
    return (
        <div className={style.Welcome}>
            <div className={style.x1}><X width={'80px'} filter={'blur(2px)'} transform={'rotate(-20deg)'} /></div>
            <div className={style.o1}><O width={'60px'} filter={'blur(3px)'} transform={'rotate(-10deg)'} /></div>
            <Logo />
            <div className={style.o2}><O width={'100px'} filter={'blur(3px)'} transform={'rotate(20deg)'} /></div>
            <div className={style.x2}><X width={'150px'} filter={'blur(5px)'} transform={'rotate(30deg)'} /></div>
        </div>
    )
}
