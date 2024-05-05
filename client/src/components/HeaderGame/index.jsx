import style from './style.module.scss'

export default function HeaderGame({userName}) {
    return (
        <div className={style.all}>
            <div className={style.triangle}></div>
            <div className={style.HeaderGame}>{userName} win!!</div>
            <div className={style.triangle2}></div>
        </div>
    )
}
