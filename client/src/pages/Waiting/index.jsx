import { useEffect } from 'react'
import Board from '../../components/Board'
import ButtonBack from '../../components/ButtonBack'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import useSocket from '../../socket'
import style from './style.module.scss'

export default function Waiting() {
    const socket = useSocket()
    useEffect(() => {
        socket.emit('create-game', { char: 'X', img: 1, name: 'miriam' })
        console.log('🤩🤩🤩');
        socket.on('create-game', (msg) => console.log(msg))
    }, [])

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
