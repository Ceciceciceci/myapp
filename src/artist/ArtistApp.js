import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ArtistHome from './ArtistHome';
import ArtistGallery from './ArtistGallery';

const ArtistGlobal = createGlobalStyle`
  body {
    margin: 0;
    background: #fffdf7;
    color: #1e2a4a;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: inherit;
  }
`;

const Shell = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: #fffdf7;
`;

export default function ArtistApp() {
  return (
    <Shell className="artist-site">
      <ArtistGlobal />
      <Switch>
        <Route exact path="/artist" component={ArtistHome} />
        <Route exact path="/artist/:category" component={ArtistGallery} />
        <Redirect to="/artist" />
      </Switch>
    </Shell>
  );
}
