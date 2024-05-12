import { useNavigate } from 'react-router-dom';
import style from './style.module.scss'
import { PiArrowArcLeftBold } from "react-icons/pi";


export default function ButtonBack() {
    const nav = useNavigate()
    return (
        <div className={style.ButtonBack} onClick={()=>{nav(-1)}}>
            <PiArrowArcLeftBold style={{width:'100px',height:'100px'}}/>
        </div>
    )
}
