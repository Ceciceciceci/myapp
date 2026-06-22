import React, { useState } from 'react';
import styled from 'styled-components';
import footerMascot from '../../images/footer-mascot.png';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ceciliaaa-tran/' },
  { label: 'Github', href: 'https://github.com/Ceciceciceci' },
  { label: 'Email', href: 'mailto:cecitran94@gmail.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/ichiknees/' },
];

const FooterEl = styled.footer`
  position: relative;
  height: auto;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.navBorder};
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: env(safe-area-inset-bottom, 0);
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 1.25rem calc(1.5rem + env(safe-area-inset-bottom, 0));
  }
`;

const Copyright = styled.p`
  flex: 1;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.displayLight};
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.navSubtitle};
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 900px) {
    flex: unset;
    width: 100%;
    white-space: normal;
    text-align: center;
    font-size: 1rem;
  }
`;

const MascotWrap = styled.div`
  flex-shrink: 0;
  width: 124px;
  height: 49px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const SocialList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5rem;

  @media (max-width: 900px) {
    flex: unset;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
  }
`;

const SocialLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.displayLight};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.navLinkHover : theme.colors.navSubtitle};
  transition: color 0.2s;
  white-space: nowrap;
`;

const DesktopOnly = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 900px) {
    display: block;
  }
`;

function SocialItem({ label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <SocialLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </SocialLink>
  );
}

export default function UxFooter() {
  const year = new Date().getFullYear();

  return (
    <FooterEl>
      <FooterInner>
        <DesktopOnly>
          <Copyright>
            © Cecilia Tran, {year}
          </Copyright>
        </DesktopOnly>

        <MascotWrap>
          <img src={footerMascot} alt="" aria-hidden="true" />
        </MascotWrap>

        <SocialList>
          {socials.map((s) => (
            <SocialItem key={s.label} {...s} />
          ))}
        </SocialList>

        <MobileOnly>
          <Copyright>
            © Cecilia Tran, {year}
          </Copyright>
        </MobileOnly>
      </FooterInner>
    </FooterEl>
  );
}
