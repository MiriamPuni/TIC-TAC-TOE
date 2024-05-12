import style from './style.module.scss'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

export default function Menu() {
    
    return (
        <div className={style.Menu}>
            <Logo />
            <div className={style.buttons}>
                <Button content={"Play Solo"} fontSize={"35px"} />
                <Button content={"Play with a Friend"} fontSize={"25px"} />
            </div>
        </div>
    )
}
