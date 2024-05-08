import style from './style.module.scss'

export default function Board({ width, height, children }) {
    return (
        <div style={{ width, height }} className={style.Board}>
            {children}
        </div>
    )
}
