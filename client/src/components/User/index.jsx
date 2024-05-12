import style from './style.module.scss'

export default function User({ avatar, userName, width, height }) {
  return (
    <div className={style.User}>
      <img src={avatar} alt="" style={{ width, height }} className={style.img}/>
      <div className={style.userName}>{userName}</div>
    </div>
  )
}
