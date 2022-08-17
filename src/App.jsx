import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import SideBar from './components/sidebar/SideBar'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, loaderTheme } from './theme'
import { GlobalStyles } from './global'
import Loader from './components/loader/Loader'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const Copyright = styled.div`
  margin-left: 6rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 600px) {
    margin-left: 0rem;
    padding-bottom: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const CopyrightIcons = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`

const Icon = styled.a`
    color: ${({ theme }) => theme.primaryAccent};
    font-size: 1.4rem;

    &:hover {
      transition: all 200ms ease;
      color: ${({ theme }) => theme.primary};
    }
  }
`

const App = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3500)

  const [isToggled, setIsToggled] = useState(false)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (isToggled) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    setIsToggled(!isToggled)
  }

  return (
    <>
      {loading ? (
        <ThemeProvider theme={loaderTheme}>
          <GlobalStyles />
          <Loader />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <SideBar />
          <Nav isToggled={isToggled} onToggle={toggleTheme} />
          <Element name={'header'}>
            <Header />
          </Element>
          <Element name={'about'}>
            <About />
          </Element>
          <Element name={'experience'}>
            <Experience />
          </Element>
          <Element name={'portfolio'}>
            <Portfolio />
          </Element>
          <Footer />
          <Copyright>
            <CopyrightIcons>
              <Icon
                href='https://linkedin.com/in/afonsousa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FiLinkedin />
              </Icon>
              <Icon
                href='https://github.com/AfonsoSalgadoSousa/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FiGithub />
              </Icon>
            </CopyrightIcons>
            <small>&copy; Designed & Built by Afonso Sousa</small>
          </Copyright>
        </ThemeProvider>
      )}
    </>
  )
}

export default App
