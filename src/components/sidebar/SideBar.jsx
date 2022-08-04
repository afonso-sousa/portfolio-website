import React, { useEffect } from 'react'
import './sidebar.scss'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const SideBar = () => {
  // useEffect(() => {
  //   let el = document.querySelector('.myElement')
  //   el.classList.add('fade-in')
  // })

  return (
    <>
      <div className='socials'>
        <a
          href='https://linkedin.com/in/afonsousa'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiLinkedin className='icon' />
        </a>
        <a
          href='https://github.com/AfonsoSalgadoSousa/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiGithub className='icon' />
        </a>
      </div>
      <div className='email'>
        <a
          href='mailto:afonsousa2806@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          afonsousa2806@gmail.com
        </a>
      </div>
    </>
  )
}

export default SideBar
