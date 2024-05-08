import style from './style.module.scss'
import ButtonBack from '../../components/ButtonBack'
import Title from '../../components/Title'
import Board from '../../components/Board'
import Button from '../../components/Button'

export default function JoinGame() {
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
                <Button content={"Join"} fontSize={"30px"} />
                <br />
                <br />
                <div className={style.titleline}>
                    <div className={style.line}></div>
                    <Title content={"OR"} />
                    <div className={style.line}></div>
                </div>
                <br />
                <br />

                <Button content={"Create A Game"} fontSize={"33px"} />
            </div>
        </div>
    )
}
