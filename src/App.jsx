import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SideBar from './components/sidebar/SideBar'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import Loader from './components/loader/Loader'

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
        <Loader />
      ) : (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <SideBar />
          <Header />
          <Nav isToggled={isToggled} onToggle={toggleTheme} />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </ThemeProvider>
      )}
    </>
  )
}

export default App
