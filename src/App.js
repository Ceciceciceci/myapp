import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import UxApp from './ux/UxApp';
import { LightTheme, DarkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import ScrollTo from './components/ScrollTo';

function AppRoutes() {
  const [theme] = useState('light');
  const location = useLocation();
  const isUxRoute = location.pathname.startsWith('/ux');

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <div className={isUxRoute ? 'App app--ux' : 'App'}>
        <Switch>
          <Route path="/ux" component={UxApp} />
          <Redirect exact from="/" to="/ux" />
          <Redirect to="/ux" />
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
