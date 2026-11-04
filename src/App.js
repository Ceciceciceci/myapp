import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import UxApp from './ux/UxApp';
import ArtistApp from './artist/ArtistApp';
import { LightTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import ScrollTo from './components/ScrollTo';

function UxRoutes() {
  return (
    <ThemeProvider theme={LightTheme}>
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
