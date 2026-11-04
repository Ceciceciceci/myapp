import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { UxGlobalStyles } from './styles';
import UxNav from './components/Nav';
import UxFooter from './components/Footer';
import UxHome from './components/Home';
import UxProjects from './components/Projects';
import UxCaseStudy from './components/CaseStudy';
import UxAbout from './components/About';
import UxArt from './components/Art';
import UxResume from './components/Resume';

const THEME_KEY = 'ux-theme-mode';

const Shell = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  transition: background 0.25s ease, color 0.25s ease;
`;

const Content = styled.div`
  width: 100%;
`;

export default function UxApp() {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <UxGlobalStyles />
      <Shell className="ux-portfolio">
        <UxNav
          mode={mode}
          onToggleTheme={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
        />
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
