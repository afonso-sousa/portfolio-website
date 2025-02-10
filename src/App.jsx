import React, { useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Research from './components/research/Research'
import SideBar from './components/sidebar/SideBar'
import { GlobalStyles } from './global'
import { darkTheme, lightTheme, loaderTheme } from './theme'

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
          <BrowserRouter>
            <GlobalStyles />
            <SideBar />
            <Nav isToggled={isToggled} onToggle={toggleTheme} />
            <div id="header">
              <Header />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="portfolio">
              <Portfolio />
            </div>
            <div id="research">
              <Research />
            </div>
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
                  href='https://github.com/afonso-sousa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FiGithub />
                </Icon>
              </CopyrightIcons>
              <small>&copy; Designed & Built by Afonso Sousa</small>
            </Copyright>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </>
  )
}

export default App
