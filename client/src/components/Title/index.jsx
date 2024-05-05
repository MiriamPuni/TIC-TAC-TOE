import style from './style.module.scss'

export default function Title({ content }) {
    return (
        <div className={style.all}>
            <div className={style.shadow}></div>
            <div className={style.Title}>{content}</div>
        </div>
    )
}
