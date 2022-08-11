import React from 'react'
import me from '../../assets/me.png'
import * as Styled from './About.styled'
import { FiTriangle } from 'react-icons/fi'

const About = () => {
  return (
    <Styled.About>
      <h2>About me</h2>

      <Styled.AboutContainer>
        <Styled.AboutMe>
          <img src={me} alt='me' />
        </Styled.AboutMe>

        <Styled.AboutContent>
          <p>
            Hello! My name is Afonso and I enjoy creating every kind of
            software. My knowledge is rooted in a sturdy education, having
            completed a bachelor's and a master's degree in Computer
            Engineering. Today, I am a PhD student at FEUP, researching in
            Natural Language Processing, specifically in Paraphrase Generation.
            I love to tinker with many different technologies. Following are a
            few I have been working with recently:
          </p>
          <Styled.TechItemList>
            <Styled.TechItem>
              <Styled.Icon>
                <FiTriangle />
              </Styled.Icon>
              <h4>React</h4>
            </Styled.TechItem>
            <Styled.TechItem>
              <Styled.Icon>
                <FiTriangle />
              </Styled.Icon>
              <h4>Godot</h4>
            </Styled.TechItem>
            <Styled.TechItem>
              <Styled.Icon>
                <FiTriangle />
              </Styled.Icon>
              <h4>Pytorch</h4>
            </Styled.TechItem>
          </Styled.TechItemList>
        </Styled.AboutContent>
      </Styled.AboutContainer>
    </Styled.About>
  )
}

export default About
