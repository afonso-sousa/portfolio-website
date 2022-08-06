import React from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import './switch.scss'

const Switch = ({ isToggled, onToggle }) => {
  return (
    <label className='switch'>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className='slider'>
        <BsSunFill className='icon' />
        <BsMoonStarsFill className='icon' />
      </span>
    </label>
  )
}

export default Switch
