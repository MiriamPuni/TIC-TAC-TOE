import style from './style.module.scss'

export default function Cell({ width, height , colorCell }) {
    return (
        <div style={{ width, height , backgroundColor: colorCell }} className={style.Cell}>
        </div>
    )
}
