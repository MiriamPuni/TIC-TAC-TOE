import style from './style.module.scss'

export default function Cell({ width, height , colorCell, children, data, onClick }) {
    return (
        <div onClick={()=>{onClick(data[0], data[1])}} style={{ width, height , backgroundColor: colorCell }} className={style.Cell}>
            {children}
        </div>
    )
}
