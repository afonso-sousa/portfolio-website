"use client";

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import About from './components/about/About';
import Copyright from './components/copyright/Copyright';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Research from './components/research/Research';
import SideBar from './components/sidebar/SideBar';
import { GlobalStyles } from './styles/global';
import { darkTheme, lightTheme, loaderTheme } from './styles/theme';


export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isToggled, setIsToggled] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Only run this effect on the client side
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const toggleTheme = () => {
    setTheme(isToggled ? 'light' : 'dark');
    setIsToggled(!isToggled);
  };

  return (
    <ThemeProvider theme={loading ? loaderTheme : theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {loading ? (
        <Loader />
      ) : (
        <>
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
          <Copyright />
        </>
      )}
    </ThemeProvider>
  )
}
