import styled, { createGlobalStyle, css } from 'styled-components';

export const UxGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=DM+Mono&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  .ux-portfolio {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    min-height: 100vh;
  }

  .ux-portfolio a {
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

  .app--ux {
    overflow: visible;
    margin: 0;
  }
`;

export const PageMain = styled.main`
  min-height: 100vh;
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
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.25rem;
`;

export const DisplayHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1;
  font-weight: 600;
`;

export const Tag = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: 1.5px solid ${({ $border }) => $border};
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  box-shadow: 0 1px 3px rgba(92, 51, 23, 0.08);
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
