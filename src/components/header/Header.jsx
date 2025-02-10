import { motion } from 'framer-motion'
import React from 'react'
import CV from '../../assets/cv.pdf'
import * as Styled from './Header.styled'

function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <MotionEntrance delay={0.5}>
          <h2>Hello, my name is</h2>
        </MotionEntrance>
        <MotionEntrance delay={0.6}>
          <h1>Afonso Sousa.</h1>
        </MotionEntrance>
        <MotionEntrance delay={0.7}>
          <Styled.SecondTitle>
            I like building things with software.
          </Styled.SecondTitle>
        </MotionEntrance>
        <MotionEntrance delay={0.8}>
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
        </MotionEntrance>
        <MotionEntrance delay={0.9}>
          <div>
            <a href={CV} download className='btn'>
              Check out my CV!
            </a>
          </div>
        </MotionEntrance>
      </Styled.HeaderContainer>
    </Styled.Header>
  )
}

// Reusable animation wrapper with Framer Motion
const MotionEntrance = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default Header