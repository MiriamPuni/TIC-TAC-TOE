import style from './style.module.scss'

export default function Button({content}) {
  return (
    <div className={style.Button}>
        {content}
    </div>
  )
}
