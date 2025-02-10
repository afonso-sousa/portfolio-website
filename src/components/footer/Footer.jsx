import { motion } from 'framer-motion'
import React from 'react'
import * as Styled from './Footer.styled'

function Footer() {
  return (
    <Styled.Footer>
      <MotionEntrance delay={0.4}>
        <h2>Next Steps</h2>
      </MotionEntrance>
      <Styled.FooterContainer>
        <MotionEntrance delay={0.5}>
          <p>
            My inbox is always open. Leave an email and I will try my best to get back to you! Do not forget to visit my{' '}
            <Styled.HoverEffectLink
              href='https://linkedin.com/in/afonsousa'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </Styled.HoverEffectLink>{' '}
            and{' '}
            <Styled.HoverEffectLink
              href='https://github.com/afonso-sousa/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </Styled.HoverEffectLink>
            .
          </p>
        </MotionEntrance>
      </Styled.FooterContainer>
    </Styled.Footer>
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

export default Footer