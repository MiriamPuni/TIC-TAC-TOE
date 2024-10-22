import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import style from './style.module.scss'

export default function Menu({ setPlayerWins, setOpponentWins }) {
    const nav = useNavigate()

    const onClickPlaySolo = (e) => {
        e.preventDefault()
        setPlayerWins(0)
        setOpponentWins(0)
        localStorage.setItem('playerWins', 0)
        localStorage.setItem('opponentWins', 0)
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
                    <Button content={"Play Game"} fontSize={"35px"} />
                </div>
                {/* <div onClick={onClickPlayFriend}>
                    <Button content={"Play with a Friend"} fontSize={"25px"} />
                </div> */}
            </div>
        </div>
    )
}
