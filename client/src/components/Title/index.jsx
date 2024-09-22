import style from './style.module.scss'

export default function Title({ content, fontSize, boxShadow , color}) {
    return (
        <div className={style.all}>
            <div className={style.shadow} style={{ boxShadow }}></div>
            <div className={style.Title} style={{ fontSize , color }}>{content}</div>
        </div>
    )
}
