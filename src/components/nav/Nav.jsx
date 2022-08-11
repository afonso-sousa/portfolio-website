import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
// import './nav.scss'
import Switch from '../switch/Switch'
import { Link } from 'react-scroll'
import * as Styled from './Nav.styled'

const Nav = ({ isToggled, onToggle }) => {
  return (
    <Styled.Nav>
      <Link activeClass='active' to={'header'} spy={true}>
        <AiOutlineHome />
      </Link>
      <Link activeClass='active' to={'about'} spy={true}>
        <AiOutlineUser />
      </Link>
      <Link activeClass='active' to={'experience'} spy={true}>
        <BiBook />
      </Link>
      <Link activeClass='active' to={'portfolio'} spy={true}>
        <BsFillJournalBookmarkFill />
      </Link>
      <div></div>
      <Switch className='switch' isToggled={isToggled} onToggle={onToggle} />
    </Styled.Nav>
  )
}

export default Nav
