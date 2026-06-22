import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
            <Route exact path="/ux" component={UxHome} />
            <Route exact path="/ux/projects" component={UxProjects} />
            <Route exact path="/ux/projects/:id" component={UxCaseStudy} />
            <Route exact path="/ux/art" component={UxArt} />
            <Route exact path="/ux/about" component={UxAbout} />
            <Route exact path="/ux/resume" component={UxResume} />
          </Switch>
        </Content>
        <UxFooter />
      </Shell>
    </ThemeProvider>
  );
}
