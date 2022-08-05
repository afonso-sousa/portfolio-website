import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import * as Styled from './SideBar.styled'

const SideBar = () => {
  return (
    <>
      <Styled.Socials>
        <Styled.Icon
          href='https://linkedin.com/in/afonsousa'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiLinkedin className='icon' />
        </Styled.Icon>
        <Styled.Icon
          href='https://github.com/AfonsoSalgadoSousa/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiGithub className='icon' />
        </Styled.Icon>
      </Styled.Socials>
      <Styled.Email>
        <a
          href='mailto:afonsousa2806@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          afonsousa2806@gmail.com
        </a>
      </Styled.Email>
    </>
  )
}

export default SideBar
