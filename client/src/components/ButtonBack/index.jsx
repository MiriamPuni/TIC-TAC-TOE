import style from './style.module.scss'
import { PiArrowArcLeftBold } from "react-icons/pi";


export default function ButtonBack() {
    return (
        <div className={style.ButtonBack}>
            <PiArrowArcLeftBold style={{width:'100px',height:'100px'}}/>
        </div>
    )
}
