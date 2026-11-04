import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import UxApp from './ux/UxApp';
import ArtistApp from './artist/ArtistApp';
import { LightTheme, DarkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import ScrollTo from './components/ScrollTo';

function UxRoutes() {
  const [theme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <div className="App app--ux">
        <UxApp />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollTo />
      <Switch>
        <Route path="/artist" component={ArtistApp} />
        <Route path="/" component={UxRoutes} />
      </Switch>
    </Router>
  );
}
