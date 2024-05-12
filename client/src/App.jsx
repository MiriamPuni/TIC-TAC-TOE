import React from 'react'
import Board from './components/Board'
import Button from './components/Button'
import Cell from './components/Cell'
import X from './components/X'
import style from './style.module.scss'
import O from './components/O'
import ButtonBack from './components/ButtonBack'
import Title from './components/Title'
import Logo from './components/Logo'
import HeaderGame from './components/HeaderGame'
import apiReq from './function/apiReq'
import BoardWithPlayer from './pages/BoardWithPlayers'
import Welcome from './pages/Welcome'
import Menu from './pages/Menu'
import JoinGame from './pages/JoinGame'
import Waiting from './pages/Waiting'
import ChoosePlayer from './pages/ChoosePlayer'
import WaitingJoin from './pages/WaitingJoin'
export default function App() {
  return (
    <div>
      {/* <Welcome/> */}
      {/* <Menu /> */}
      <JoinGame/>
      {/* <Waiting/> */}
      {/* <ChoosePlayer/> */}
      {/* <WaitingJoin/> */}
      {/* <BoardWithPlayer/> */}

      {/* <HeaderGame userName={"gila"} />
      <Logo />
      <ButtonBack/>
      <Title content={"join to game"} />
      <Board width={'300px'} height={'300px'}>
        <div className={style.cell9}>
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
          <Cell width={'82px'} height={'82px'} colorCell={'#C9F9FC'} />
        </div>
      </Board>
      <Button content={"go to game!!"} />
      <X width={'70px'} height={'70px'} />
      <O width={'70px'} height={'70px'} /> */}
    </div>
  )
}
