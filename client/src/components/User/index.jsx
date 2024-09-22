import { useContext, useState } from 'react'
import { DataContext } from '../../App'
import style from './style.module.scss'
import O from '../O'
import X from '../X'

export default function User({ width, height, player, opponentWins, playerWins }) {

  const { user, setUser } = useContext(DataContext)
  const { userName, userName2, img, img2 } = user
  const imgAnonimy = "anonimy.png"

  return (
    <div className={style.User}>
      {/* שחקן אמיתי */}
      <div>
        <div className={style.userName}>{userName ? userName : "PLAYER 1"}</div>
        <img src={img ? img : imgAnonimy} alt="" style={player === user.play ? { width: '130px', height: '130px' } : { width: '115px', height: '115px' }} className={style.img} />
        <div className={style.userName}>
          {user.play === 'O' ?
            <div className={style.wins}>
              <div className={style.winumber}>Wins: {playerWins}</div>
              <div className={style.ooo}><O width={'10%'} height={'10%'} /></div>
            </div>
            :
            <div className={style.wins}>
              <div className={style.winumber}>Wins: {playerWins}</div>
              <div className={style.ooo}>
                <X width={'10%'} height={'10%'} />
              </div>
            </div>
          }
        </div>
      </div>
      <div>
        {/* שחקן מחשב */}
        <div className={style.userName}>{userName2 ? userName2 : "PLAYER 2"}</div>
        <img src={img2 ? img2 : imgAnonimy} alt="" style={user.play === player ? { width: '115px', height: '115px' } : { width: '130px', height: '130px' }} className={style.img} />
        <div className={style.userName}>
          {user.play === 'O' ?
            <div className={style.wins}>
              <div className={style.winumber}>Wins: { opponentWins}</div>
              <div className={style.ooo}>
                <X width={'10%'} height={'10%'} />
              </div>
            </div>
            :
            <div className={style.wins}>
              <div className={style.winumber}>Wins: {opponentWins}</div>
              <div className={style.ooo}><O width={'10%'} height={'10%'} /></div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
