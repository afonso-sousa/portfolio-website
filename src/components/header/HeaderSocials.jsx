import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/afonsousa' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/AfonsoSalgadoSousa/' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials