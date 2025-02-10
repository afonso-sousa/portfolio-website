import { motion } from 'framer-motion'
import React from 'react'
import { FiTriangle } from 'react-icons/fi'
import me from '../../assets/me.jpeg'
import * as Styled from './About.styled'

function About() {
  return (
    <Styled.About>
      <MotionEntrance delay={0.4}>
        <h2>About me</h2>
      </MotionEntrance>

      <Styled.AboutContainer>
        <MotionEntrance delay={0.5}>
          <Styled.AboutMe>
            <img src={me} alt='me' />
          </Styled.AboutMe>
        </MotionEntrance>

        <MotionEntrance delay={0.6}>
          <Styled.AboutContent>
            <p>
              Hello! My name is Afonso and I enjoy creating every kind of
              software. My knowledge is rooted in a sturdy education, having
              completed a bachelor's and a master's degree in Computer
              Engineering. Today, I am a PhD student at FEUP, researching in
              Natural Language Processing, specifically in Paraphrase
              Generation. I love to tinker with many different technologies.
              Following are a few I have been working with recently:
            </p>
            <Styled.TechItemList>
              {['Pytorch', 'Flutter', 'Godot'].map((tech, index) => (
                <MotionEntrance key={tech} delay={0.7 + index * 0.1}>
                  <Styled.TechItem>
                    <Styled.Icon>
                      <FiTriangle />
                    </Styled.Icon>
                    <h4>{tech}</h4>
                  </Styled.TechItem>
                </MotionEntrance>
              ))}
            </Styled.TechItemList>
          </Styled.AboutContent>
        </MotionEntrance>
      </Styled.AboutContainer>
    </Styled.About>
  )
}

// Reusable motion wrapper
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

export default About