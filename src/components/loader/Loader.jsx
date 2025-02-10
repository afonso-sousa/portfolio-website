import React from 'react'
import LOGO from '../../assets/portfolio_logo.png'
import * as Styled from './Loader.styled'

const Loader = () => {
  return (
    <Styled.Background>
      <Styled.Loader>
        <Styled.InnerCircle>
          <Styled.FadeInImg src={LOGO} alt='logo' />
        </Styled.InnerCircle>
        <Styled.HoldLeft>
          <Styled.Fill></Styled.Fill>
        </Styled.HoldLeft>
        <Styled.HoldRight>
          <Styled.Fill></Styled.Fill>
        </Styled.HoldRight>
      </Styled.Loader>
    </Styled.Background>
  )
}

export default Loader
