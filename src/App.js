import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import NewHome from './components/NewHome';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

export default function App () {

  //toggle between themes
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
      if(theme === 'light'){
          setTheme('dark');
      } else {
          setTheme('light');
      }
  }

  const navigation = {
    about: '#about',
    projects: '#projects',
    caseStudies: '#caseStudies',
    contact: '#about',
    art: '/art'
  }

  return (
      <div className="App">
        <ThemeProvider theme={(theme === 'light') ? LightTheme : DarkTheme}>
          <>
            <GlobalStyles />
            <Header theme={theme} setTheme={setTheme} navigation={navigation} toggleTheme={toggleTheme}/>
            <NewHome className="main-container" theme={theme} setTheme={setTheme} /> 
          </>
        </ThemeProvider>
      </div>
  );
}
