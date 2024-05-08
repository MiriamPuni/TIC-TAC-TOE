import style from './style.module.scss'
import ButtonBack from '../../components/ButtonBack'
import Title from '../../components/Title'
import Board from '../../components/Board'
import Loading from '../../components/Loading'

export default function Waiting() {
    return (
        <div className={style.Waiting}>
            <ButtonBack />
            <div className={style.withoutbuttonback}>
                <Title content={"Your Code:"} />
                <Board height={"70px"} width={"95%"} />
                <div className={style.code}>{"123456"}</div>
                <br /><br /><br /><br /><br /><br />
                <Loading /><br /><br /><br />
                <Title content={"Waiting For Oppenent..."} />
            </div>
        </div>
    )
}
