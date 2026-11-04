import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterEl = styled.footer`
  && {
    width: 100%;
    background: ${({ theme }) => theme.colors.footerBg};
    margin-top: 1rem;
    padding: 2.5rem 2rem calc(2.5rem + env(safe-area-inset-bottom, 0));
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 600px) {
    && {
      padding: 2rem 1.25rem calc(2rem + env(safe-area-inset-bottom, 0));
    }
  }
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Brand = styled.p`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: lowercase;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

const FooterLink = styled(Link)`
  && {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.mutedForeground};
    text-decoration: none;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Mail = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export default function UxFooter() {
  return (
    <FooterEl>
      <FooterInner>
        <Brand>cecilia tran</Brand>
        <Links>
          <FooterLink to="/">work</FooterLink>
          <FooterLink to="/about">about</FooterLink>
          <FooterLink to="/art">art</FooterLink>
          <Mail href="mailto:cecitran94@gmail.com">email</Mail>
        </Links>
      </FooterInner>
    </FooterEl>
  );
}
