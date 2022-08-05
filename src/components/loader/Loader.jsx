import React from 'react'
import './loader.scss'
import LOGO from '../../assets/portfolio_logo.png'

const Loader = () => {
  return (
    <div id='loading'>
      <div class='inner-circle'>
        <img class='fade-in-image' src={LOGO} alt='logo' />
      </div>
      <div class='hold left'>
        <div class='fill'></div>
      </div>
      <div class='hold right'>
        <div class='fill'></div>
      </div>
    </div>
  )
}

export default Loader
