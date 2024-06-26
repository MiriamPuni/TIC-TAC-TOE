import style from './style.module.scss'

export default function Logo() {
    return (
        <div className={style.Logo}>
            <div className={style.all}>
                <img src="Logo (1).png" alt="" />
                <div className={style.shadow}></div>
            </div>
        </div>
    )
}
