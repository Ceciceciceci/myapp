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
import styled from 'styled-components';

const Shell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
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
          </Switch>
        </Content>
        <UxFooter />
      </Shell>
    </ThemeProvider>
  );
}
