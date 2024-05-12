import style from './style.module.scss'
import ButtonBack from '../../components/ButtonBack'
import Title from '../../components/Title'
import Board from '../../components/Board'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function JoinGame() {

    const nav = useNavigate()
    const WaitingJoin=(e)=>{
        e.preventDefault()
        nav("/WaitingJoin")
    }
    const Waiting=(e)=>{
        e.preventDefault()
        nav("/Waiting")
    }

    return (
        <div className={style.JoinGame}>
            <ButtonBack />
            <div className={style.withoutbuttonback}>
                <br />
                <br />
                <Title content={"Join To A Game"} />
                <Board height={"80px"} width={"95%"} />
                <input type="text" className={style.input} placeholder='Enter Code Game' />
                <br />
                <div onClick={WaitingJoin}>
                <Button content={"Join"} fontSize={"30px"} />
                </div>
                <br />
                <br />
                <div className={style.titleline}>
                    <div className={style.line}></div>
                    <Title content={"OR"} />
                    <div className={style.line}></div>
                </div>
                <br />
                <br />
                <div onClick={Waiting}>
                <Button content={"Create A Game"} fontSize={"33px"} />
                </div>
            </div>
        </div>
    )
}
