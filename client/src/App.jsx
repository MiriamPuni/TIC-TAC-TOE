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

export default function App() {
  return (
    <div>
      <HeaderGame userName={"gila"} />
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
      <O width={'70px'} height={'70px'} />
    </div>
  )
}
