import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import NewHome from './components/NewHome';
import UxApp from './ux/UxApp';
import { LightTheme, DarkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import ScrollTo from './components/ScrollTo';

function AppRoutes() {
  const [theme, setTheme] = useState('light');
  const [activeState, setActiveState] = useState(false);
  const location = useLocation();
  const isUxRoute = location.pathname.startsWith('/ux');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const artNavigation = [
    { id: 1, key: 'fanart', link: '/fanart' },
    { id: 2, key: 'original', link: '/original' },
    { id: 3, key: 'foodart', link: '/foodart' },
    { id: 4, key: 'craft & merch', link: '/other' },
    { id: 5, key: 'contact', link: '/contact' },
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <div className={isUxRoute ? 'App app--ux' : 'App'} theme={theme} setTheme={setTheme}>
        {!isUxRoute && (
          <Header
            theme={theme}
            setTheme={setTheme}
            navigation={artNavigation}
            toggleTheme={toggleTheme}
            activeState={activeState}
            setActiveState={setActiveState}
          />
        )}
        <Switch>
          <Route path="/ux" component={UxApp} />
          <Route
            exact
            path="/"
            render={(props) => <NewHome {...props} isAuthed={true} />}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollTo />
      <AppRoutes />
    </Router>
  );
}
