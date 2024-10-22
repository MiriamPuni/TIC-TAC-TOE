import ButtonBack from '../../components/ButtonBack'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import style from './style.module.scss'

export default function WaitingJoin() {
    return (
        <div className={style.WaitingJoin}>
            <ButtonBack />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className={style.withoutbuttonback}>
                <Loading />
                <br /><br /><br /><br />
                <Title content={"Waiting..."} />
                <div className={style.title}>
                    <Title content={"Join To The Game"} />
                </div>
            </div>
        </div>
    )
}
