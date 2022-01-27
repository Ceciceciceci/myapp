import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import NewHome from './components/NewHome';
import Header from './components/Header';
import About from './components/Homepage/About';
import Projects from './components/Homepage/Projects';
import CaseStudy from './components/Homepage/CaseStudy';
import Contact from './components/Homepage/Contact';
import Resume from './components/Homepage/Resume';
import Todo from './components/Todo';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollTo from '../src/components/ScrollTo';

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

  const navigation = [
    {
      id: 1,
      key: 'about',
      link: '/about'
    },
    {
      id: 2,
      key: 'project',
      link: '/project'
    },
    {
      id: 3,
      key: 'contact',
      link: '/contact'
    },
    {
      id: 4,
      key: 'resume',
      link: '/resume'
    }
  ]
  const [activeState, setActiveState] = useState(false)

  return (
     <Router>
        <ScrollTo />
        <ThemeProvider theme={(theme === 'light') ? LightTheme : DarkTheme}>
          <>
            <GlobalStyles />
              <div className="App" theme={theme} setTheme={setTheme}>
                <Header theme={theme} 
                        setTheme={setTheme} 
                        navigation={navigation} 
                        toggleTheme={toggleTheme}
                        activeState={activeState}
                        setActiveState={setActiveState}
                />
                <Switch>
                  <Route exact path='/' render={(props) => (
                    <NewHome {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/about' render={(props) => (
                    <About {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/project' render={(props) => (
                    <Projects {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/contact' render={(props) => (
                    <Contact {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/resume' render={(props) => (
                    <Resume {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                </Switch>
              </div>
          </>
        </ThemeProvider>
      </Router>
  );
}
