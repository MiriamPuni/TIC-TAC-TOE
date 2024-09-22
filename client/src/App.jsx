import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BoardWithPlayer from './pages/BoardWithPlayers'
import ChoosePlayer from './pages/ChoosePlayer'
import JoinGame from './pages/JoinGame'
import Menu from './pages/Menu'
import Setting from './pages/Setting'
import Waiting from './pages/Waiting'
import WaitingJoin from './pages/WaitingJoin'
import Welcome from './pages/Welcome'
import useSocket, { SocketProvider } from './socket'
import SettingPlayer2 from './pages/SettingPlayer2'
import FinishedGame from './pages/FinishedGame'

export const DataContext = createContext({})

export default function App() {

  const [welcome, setWelcome] = useState(true)
  const socket = useSocket()
  const [user, setUser] = useState([{ userName: "", img: "", play: null, userName2: "", img2: "", play2: null }])
  const [win, setWin] = useState(false)
  const [player, setPlayer] = useState(user.play)
  const [playerWins, setPlayerWins] = useState(() => { return parseInt(localStorage.getItem('playerWins')) || 0; });
  const [opponentWins, setOpponentWins] = useState(() => { return parseInt(localStorage.getItem('opponentWins')) || 0 });
  const [winnerName, setWinnerName] = useState('');
  const [winnerImg, setWinnerImg] = useState('');


  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setUser(prevUser => ({
      ...prevUser,
      play2: prevUser.play === 'X' ? 'O' : 'X',
    }));

  }, [user.play]);

  useEffect(() => {
    socket.on('connection')
  }, [])

  return (
    <DataContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='*' element={welcome ? <Welcome /> : <Menu playerWins={playerWins} setPlayerWins={setPlayerWins} opponentWins={opponentWins} setOpponentWins={setOpponentWins} />} />
        <Route path='/JoinGame' element={<JoinGame />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path='/SettingPlayer2' element={<SettingPlayer2 />} />
        <Route path='/Waiting' element={<Waiting />} />
        <Route path='/WaitingJoin' element={<WaitingJoin />} />
        <Route path='/ChoosePlayer' element={<ChoosePlayer />} />
        <Route path='/BoardWithPlayer' element={<BoardWithPlayer winnerImg={winnerImg} setWinnerImg={setWinnerImg} winnerName={winnerName} setWinnerName={setWinnerName} win={win} setWin={setWin} player={player} setPlayer={setPlayer} playerWins={playerWins} setPlayerWins={setPlayerWins} opponentWins={opponentWins} setOpponentWins={setOpponentWins} />} />
        <Route path='/FinishedGame' element={<FinishedGame winnerImg={winnerImg} setWinnerImg={setWinnerImg} winnerName={winnerName} setWinnerName={setWinnerName} win={win} setWin={setWin} player={player} setPlayer={setPlayer} playerWins={playerWins} setPlayerWins={setPlayerWins} opponentWins={opponentWins} setOpponentWins={setOpponentWins} />} />
      </Routes>
    </DataContext.Provider>
  )
}
