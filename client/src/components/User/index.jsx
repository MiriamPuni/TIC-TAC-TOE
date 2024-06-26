import { useContext } from 'react'
import { DataContext } from '../../App'
import style from './style.module.scss'
import O from '../O'

export default function User({ width, height }) {

  const { user, setUser } = useContext(DataContext)
  const { userName } = user
  const { img } = user
  console.log("user", user);


  return (
    <div className={style.User}>
      <img src={img} alt="" style={{ width, height }} className={style.img} />
      <div className={style.userName}>{user.play === 'O' &&
        <div className={style.wins}>
          <div className={style.ooo}>
            <O width={'10%'} height={'10%'} />
          </div>
          <div className={style.winumber}>Wins: {"win"}</div>
        </div>}
        <div className={style.userName}>{userName}</div>
      </div>
    </div>
  )
}
