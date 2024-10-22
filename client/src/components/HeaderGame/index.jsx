import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import User from '../User';
import style from './style.module.scss';

export default function HeaderGame({ winnerName, setWinnerName, winnerImg, setWinnerImg, width, height, win, setWin, player, setPlayer, playerWins, setPlayerWins, opponentWins, setOpponentWins }) {
    const { user, setUser } = useContext(DataContext)
    const { img, img2, userName, userName2, play, play2 } = user

    const imgAnonimy = "anonimy.png"

    useEffect(() => {
        if (win && win !== 'draw') {
            console.log("player:", player, "play:", play, "win:", win);
            if (player !== play) {  // השוואה משולשת 
                const updatedWins = playerWins + 1;
                setPlayerWins(updatedWins);
                localStorage.setItem('playerWins', updatedWins);
                setWinnerName(userName);
                setWinnerImg(img);
            } else {
                const updatedOpponentWins = opponentWins + 1;
                setOpponentWins(updatedOpponentWins);
                localStorage.setItem('opponentWins', updatedOpponentWins);
                setWinnerName(userName2);
                setWinnerImg(img2);
            }
        }
    }, [win]);
    console.log("Winner:", winnerName);



    return (
        <div className={style.all}>
            <div className={style.triangle}></div>
            {
                win === 'draw' ?
                    (<div>
                        <div className={style.HeaderGame}>
                            <div className={style.titledraw}>
                                Game draw, <br /> please try again...
                            </div>
                        </div>
                        <div className={style.draw}>DRAW!!</div>
                    </div>)
                    :
                    (win ?
                        (<div className={style.HeaderGameWin}>
                            <img src={winnerImg ? winnerImg : imgAnonimy} alt="" className={style.imgavatarwin} style={{ width, height }} />
                            {winnerName ? winnerName : (player === play ? 'PLAYER 1' : 'PLAYER 2')} wins!!
                        </div>)
                        :
                        <div className={style.HeaderGame}>
                            <User playerWins={playerWins} opponentWins={opponentWins} player={player} userName={userName} width={width} height={height} />
                        </div>)
            }
            <div className={style.triangle2}></div>
        </div>
    )
}
