import style from './style.module.scss'

export default function Button({ content, fontSize }) {
  return (
    <div className={style.Button} style={{ fontSize: fontSize }}>
      {content}
    </div>
  )
}
