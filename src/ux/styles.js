import styled, { createGlobalStyle, css } from 'styled-components';

export const UxGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Fredoka:wght@300;400;500;600&family=Sometype+Mono:wght@400;500;600&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .ux-portfolio {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    min-height: 100vh;
  }

  .ux-portfolio main a,
  .ux-portfolio footer a {
    color: inherit;
  }

  /* Override main-site global header styles if any <header> is used in UX pages */
  .ux-portfolio header {
    position: static;
    z-index: auto;
    height: auto;
    width: auto;
    display: block;
    top: auto;
    padding: 0;
    flex-direction: unset;
    align-items: unset;
    justify-content: unset;
  }

  /* Override main-site global footer (absolute, 50px) */
  .ux-portfolio footer {
    position: relative;
    bottom: auto;
    left: auto;
    height: auto;
    width: 100%;
    padding: 0;
    display: block;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
  }

  .app--ux {
    overflow: visible;
    margin: 0;
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    background: ${({ theme }) => theme.colors.background};
  }

  html,
  body,
  #root {
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100%;
    min-height: 100dvh;
  }
`;

export const PageMain = styled.main`
  width: 100%;
  padding-top: ${({ theme }) => theme.navHeight};
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionLabel = styled.p`
  font-size: 0.825rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.25rem;
`;

export const displayFont = css`
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: ${({ theme }) => theme.typography.displayLetterSpacing};
  transform: scaleX(${({ theme }) => theme.typography.displayScaleX});
  transform-origin: ${({ $centered }) => ($centered ? 'center' : 'left')} center;
`;

export const DisplayHeading = styled.h1`
  ${displayFont}
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1;
  font-weight: 400;
`;

export const pillFont = css`
  font-family: ${({ theme }) => theme.fonts.displayLight};
  font-weight: 600;
`;

export const Tag = styled.span`
  ${pillFont}
  font-size: 0.825rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: none;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const mediaTablet = css`
  @media (max-width: 900px) {
    ${(props) => props.$tablet || ''}
  }
`;
