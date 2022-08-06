import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import './nav.scss'
import Switch from '../switch/Switch'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

const Nav = ({ isToggled, onToggle }) => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href='/#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
      <div className='vl'></div>
      <Switch className='switch' isToggled={isToggled} onToggle={onToggle} />
    </nav>
  )
}

export default Nav
