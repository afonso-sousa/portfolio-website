import React from 'react'
import * as Styled from './Footer.styled'
import handleViewport from 'react-in-viewport'

function FooterComponent() {
  return (
    <Styled.Footer>
      <h2>Next Steps</h2>
      <Styled.FooterContainer>
        <p>
          Although I am not currently looking for any new opportunities, my
          inbox is always open. Leave an email and I will try my best to get
          back to you! Do not forget to visit my{' '}
          <Styled.HoverEffectLink
            href='https://linkedin.com/in/afonsousa'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </Styled.HoverEffectLink>{' '}
          and{' '}
          <Styled.HoverEffectLink
            href='https://github.com/AfonsoSalgadoSousa/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </Styled.HoverEffectLink>
          .
        </p>
      </Styled.FooterContainer>
      <small>&copy; Designed & Built by Afonso Sousa</small>
    </Styled.Footer>
  )
}

const Block = (props) => {
  const { inViewport, forwardedRef } = props

  if (inViewport) {
    return (
      <Styled.EntranceAnimation delay={'0.4s'} ref={forwardedRef}>
        <FooterComponent />
      </Styled.EntranceAnimation>
    )
  }
  return (
    <div ref={forwardedRef}>
      <FooterComponent />
    </div>
  )
}

const ViewportBlock = handleViewport(Block)

const Footer = () => {
  return (
    <div>
      <ViewportBlock />
    </div>
  )
}

export default Footer
