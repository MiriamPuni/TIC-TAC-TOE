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

export const DataContext = createContext({})

export default function App() {

  const [welcome, setWelcome] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false)
    }, 4000);
  })

  const [user, setUser] = useState([{ userName: "", img: "", play: "" }])
  return (
    <DataContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='*' element={welcome ? <Welcome /> : <Menu />} />
        <Route path='/JoinGame' element={<JoinGame />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path='/Waiting' element={<Waiting />} />
        <Route path='/WaitingJoin' element={<WaitingJoin />} />
        <Route path='/ChoosePlayer' element={<ChoosePlayer />} />
        <Route path='/BoardWithPlayer' element={<BoardWithPlayer />} />
      </Routes>
    </DataContext.Provider>
  )
}
