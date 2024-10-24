import { useContext } from 'react'
import { DataContext } from '../../App'
import style from './style.module.scss'

export default function AvatarImg() {
    const { user, setUser } = useContext(DataContext)
    const img1 = "avatar1.png"
    const img2 = "avatar2.png"
    const img3 = "avatar3.png"
    const onclick = (img) => {
        setUser(user => ({ ...user, img }))
    }

    return (
        <div className={style.AvatarImg}>
            <img onClick={() => onclick(img1)} className={style.img} src={img1} alt="" />
            <img onClick={() => onclick(img2)} className={style.img} src={img2} alt="" />
            <img onClick={() => onclick(img3)} className={style.img} src={img3} alt="" />
        </div>
    )
}

