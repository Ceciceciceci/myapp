import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import NewHome from './components/NewHome';
import Header from './components/Header';
import Resume from './components/Homepage/Resume';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
     <Router>
        <ThemeProvider theme={(theme === 'light') ? LightTheme : DarkTheme}>
          <>
            <GlobalStyles />
              <div className="App" theme={theme} setTheme={setTheme}>
                <Header theme={theme} setTheme={setTheme} navigation={navigation} toggleTheme={toggleTheme}/>
                <Switch>
                  <Route exact path='/' component={NewHome} />
                  <Route path='/resume' component={Resume} />
                </Switch>
              </div>
          </>
        </ThemeProvider>
      </Router>
  );
}
