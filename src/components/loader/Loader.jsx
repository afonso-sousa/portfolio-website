import React from 'react'
import './loader.scss'
import LOGO from '../../assets/portfolio_logo.png'

const Loader = () => {
  return (
    <div id='loading'>
      <div className='inner-circle'>
        <img className='fade-in-image' src={LOGO} alt='logo' />
      </div>
      <div className='hold left'>
        <div className='fill'></div>
      </div>
      <div className='hold right'>
        <div className='fill'></div>
      </div>
    </div>
  )
}

export default Loader
