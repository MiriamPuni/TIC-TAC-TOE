import React, { useContext, useState } from 'react'
import { BsCheckLg } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'
import Board from '../../components/Board'
import ButtonBack from '../../components/ButtonBack'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import style from './style.module.scss'
import AvatarImg from '../../components/AvatarImg'



export default function Setting() {
    const { user, setUser } = useContext(DataContext)
    const { img } = user
    const [userName, setUserName] = useState('')
    const nav = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        
        setUser((user) => ({ ...user, userName }))
        const isPlayer2Set = user.img2 && user.img2 !== "imgAnonimy" && user.userName2 && user.userName2 !== "PLAYER 2";
    
        if (isPlayer2Set) {
            nav("/ChoosePlayer");
        } else {
            nav("/SettingPlayer2");
        }
        localStorage.setItem('playerWins' , 0)
        localStorage.setItem('opponentWins' , 0)
    }

    return (
        <div className={style.Setting}>
            <Logo />
            <Title content={"Player 1:"} boxShadow={'0px 0px 0px 0px rgb(0, 0, 0 ,0)'} />
            {/* <div className={style.title}>
                <Title content={"Your Name:"} fontSize={'27px'} boxShadow={'0px 0px 0px 0px rgb(154, 154, 154 ,0)'}/>
            </div> */}
            <Board height={"80px"} width={"95%"} />
            <form onSubmit={onSubmit}>
                <input type="text" className={style.input} value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder='Enter Your Name' />
                <br />
                <Title content={"Choose Avater"} />
                <AvatarImg />
                <br />
                <div className={style.button2}>
                    <ButtonBack />
                    <button className={style.ButtonBack} type='submit'>
                        <BsCheckLg style={{ width: '100px', height: '100px' }} />
                    </button>
                </div>
            </form>
        </div>
    )
}
