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

import Fanart from './components/Fanart';
import Original from './components/Original';
import FoodArt from './components/FoodArt';
import Contact2 from './components/Contact2';
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

  const artNavigation = [
    {
      id: 1,
      key: 'fanart',
      link: '/fanart'
    },
    {
      id: 2,
      key: 'original',
      link: '/original'
    },
    {
      id: 3,
      key: 'foodart',
      link: '/foodart'
    },
    {
      id: 4,
      key: 'contact',
      link: '/contact'
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
                        navigation={artNavigation} 
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
                  <Route exact path='/fanart' render={(props) => (
                    <Fanart {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/original' render={(props) => (
                    <Original {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/foodart' render={(props) => (
                    <FoodArt {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                  <Route exact path='/contact2' render={(props) => (
                    <Contact2 {...props} theme={theme} setTheme={setTheme} isAuthed={true} />
                  )} />
                </Switch>
              </div>
          </>
        </ThemeProvider>
      </Router>
  );
}
