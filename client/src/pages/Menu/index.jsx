import style from './style.module.scss'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
    const nav = useNavigate()

    const onClickPlaySolo = (e) => {
        e.preventDefault()
        nav("/Setting")
    }

    const onClickPlayFriend = (e) => {
        e.preventDefault()
        nav("/JoinGame")
    }

    return (
        <div className={style.Menu}>
            <Logo />
            <div className={style.buttons}>
                <div onClick={onClickPlaySolo}>
                    <Button content={"Play Solo"} fontSize={"35px"} />
                </div>
                <div onClick={onClickPlayFriend}>
                    <Button content={"Play with a Friend"} fontSize={"25px"} />
                </div>
            </div>
        </div>
    )
}
