import React from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import * as Styled from './Switch.styled'

const Switch = ({ isToggled, onToggle }) => {
  return (
    <Styled.Switch>
      <Styled.Input type='checkbox' checked={isToggled} onChange={onToggle} />
      <Styled.Slider>
        <BsSunFill />
        <BsMoonStarsFill />
      </Styled.Slider>
    </Styled.Switch>
  )
}

export default Switch
