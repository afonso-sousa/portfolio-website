import React from 'react'
import CV from '../../assets/cv.pdf'
import * as Styled from './Header.styled'
import handleViewport from 'react-in-viewport'

function HeaderComponent() {
  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Styled.EntranceAnimation delay={'0.5s'}>
          <h2>Hello, my name is</h2>
        </Styled.EntranceAnimation>
        <Styled.EntranceAnimation delay={'0.6s'}>
          <h1>Afonso Sousa.</h1>
        </Styled.EntranceAnimation>
        <Styled.EntranceAnimation delay={'0.7s'}>
          <Styled.SecondTitle>
            I like building things with software.
          </Styled.SecondTitle>
        </Styled.EntranceAnimation>
        <Styled.EntranceAnimation delay={'0.8s'}>
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
        </Styled.EntranceAnimation>
        <Styled.EntranceAnimation delay={'0.9s'}>
          <div>
            <a href={CV} download className='btn'>
              Check out my CV!
            </a>
          </div>
        </Styled.EntranceAnimation>
      </Styled.HeaderContainer>
    </Styled.Header>
  )
}

const Block = (props) => {
  const { inViewport, forwardedRef } = props

  if (inViewport) {
    return (
      <Styled.EntranceAnimation delay={'0.4s'} ref={forwardedRef}>
        <HeaderComponent />
      </Styled.EntranceAnimation>
    )
  }
  return (
    <div ref={forwardedRef}>
      <HeaderComponent />
    </div>
  )
}

const ViewportBlock = handleViewport(Block)

const Header = () => {
  return (
    <div>
      <ViewportBlock />
    </div>
  )
}

export default Header
