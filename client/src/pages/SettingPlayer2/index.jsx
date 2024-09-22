import React, { useContext, useState } from 'react'
import { BsCheckLg } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'
import AvatarImgPlayer2 from '../../components/AvatarImgPlayer2'
import Board from '../../components/Board'
import ButtonBack from '../../components/ButtonBack'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import style from './style.module.scss'



export default function Setting() {
    const { user, setUser } = useContext(DataContext)
    const { img } = user
    const [userName2, setUserName2] = useState('')
    const nav = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        nav("/ChoosePlayer")
        setUser(user => ({ ...user, userName2 }))

    }

    return (
        <div className={style.Setting}>
            <Logo />
            <Title content={"Player 2:"} boxShadow={'0px 0px 0px 0px rgb(0, 0, 0 ,0)'} />
            {/* <div className={style.title}>
                <Title content={"Your Name:"} fontSize={'27px'} boxShadow={'0px 0px 0px 0px rgb(154, 154, 154 ,0)'}/>
            </div> */}
            <Board height={"80px"} width={"95%"} />
            <form onSubmit={onSubmit}>
                <input type="text" className={style.input} value={userName2} onChange={(e) => { setUserName2(e.target.value) }} placeholder='Enter Your Name' />
                <br />
                <Title content={"Choose Avater"} />
                <AvatarImgPlayer2 />
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
