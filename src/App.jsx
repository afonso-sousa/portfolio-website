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

const App = () => {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 2000)
  }

  const [isToggled, setIsToggled] = useState(false)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (isToggled) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    setIsToggled(!isToggled)
  }

  return (
    !loading && (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <SideBar />
          <Header />
          <Nav isToggled={isToggled} onToggle={toggleTheme} />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      </ThemeProvider>
    )
  )
}

export default App
