import React from 'react'
import CV from '../../assets/cv.pdf'
import * as Styled from './Header.styled'

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <h2>Hello, my name is</h2>
        <h1>Afonso Sousa.</h1>
        <h1>I like building things with software.</h1>
        <p>
          I am a Software Engineer specializing in Data Science. In my spare
          time I tinker with web development, game development and design.
          Currently, I am a PhD student working on paraphrase generation at{' '}
          <Styled.HoverEffectLink
            href='https://sigarra.up.pt/feup/pt/web_page.inicial'
            target='_blank'
            rel='noopener noreferrer'
          >
            FEUP
          </Styled.HoverEffectLink>
          .
        </p>
        <div>
          <a href={CV} download className='btn'>
            Check out my CV!
          </a>
        </div>
      </Styled.HeaderContainer>
    </Styled.Header>
  )
}

export default Header
