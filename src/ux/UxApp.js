import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { uxTheme } from './theme';
import { UxGlobalStyles } from './styles';
import UxNav from './components/Nav';
import UxFooter from './components/Footer';
import UxHome from './components/Home';
import UxProjects from './components/Projects';
import UxCaseStudy from './components/CaseStudy';
import UxAbout from './components/About';
import UxArt from './components/Art';
import UxResume from './components/Resume';
import styled from 'styled-components';

const Shell = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  width: 100%;
`;

export default function UxApp() {
  return (
    <ThemeProvider theme={uxTheme}>
      <UxGlobalStyles />
      <Shell className="ux-portfolio">
        <UxNav />
        <Content>
          <Switch>
            <Route exact path="/" component={UxHome} />
            <Route exact path="/projects" component={UxProjects} />
            <Route exact path="/projects/:id" component={UxCaseStudy} />
            <Route exact path="/art" component={UxArt} />
            <Route exact path="/about" component={UxAbout} />
            <Route exact path="/resume" component={UxResume} />

            <Redirect exact from="/ux" to="/" />
            <Redirect exact from="/ux/" to="/" />
            <Redirect exact from="/ux/projects" to="/projects" />
            <Redirect from="/ux/projects/:id" to="/projects/:id" />
            <Redirect exact from="/ux/art" to="/art" />
            <Redirect exact from="/ux/about" to="/about" />
            <Redirect exact from="/ux/resume" to="/resume" />

            <Redirect to="/" />
          </Switch>
        </Content>
        <UxFooter />
      </Shell>
    </ThemeProvider>
  );
}
