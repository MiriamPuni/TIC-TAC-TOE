import { useContext } from 'react'
import { DataContext } from '../../App'
import style from './style.module.scss'

export default function User({ width, height }) {

  const { user, setUser } = useContext(DataContext)
  const { userName } = user
  const { img } = user
  console.log("user" , user);


  return (
    <div className={style.User}>
      <img src={img} alt="" style={{ width, height }} className={style.img} />
      <div className={style.userName}>{userName}</div>
    </div>
  )
}
