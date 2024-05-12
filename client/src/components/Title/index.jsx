import style from './style.module.scss'

export default function Title({ content, fontSize }) {
    return (
        <div className={style.all}>
            <div className={style.shadow}></div>
            <div className={style.Title}  style={{fontSize} }>{content}</div>
        </div>
    )
}
