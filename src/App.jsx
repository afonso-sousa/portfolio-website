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
        </ThemeProvider>
      )}
    </>
  )
}

export default App
