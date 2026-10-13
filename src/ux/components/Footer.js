import React from 'react';
import styled from 'styled-components';
import footerMascot from '../../images/footer-mascot.png';
import linkedinLogo from '../../images/linkedin-square-logo.webp';
import emailIcon from '../../images/email-icon.svg';

const socials = [
  {
    label: 'Email',
    href: 'mailto:cecitran94@gmail.com',
    icon: emailIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ceciliaaa-tran/',
    icon: linkedinLogo,
  },
];

const FooterEl = styled.footer`
  && {
    width: 100%;
    background: ${({ theme }) => theme.colors.footerBg};
    margin-top: 3rem;
    padding: 40px 2rem;
    padding-bottom: calc(40px + env(safe-area-inset-bottom, 0));
  }

  @media (max-width: 600px) {
    && {
      padding: 40px 1.25rem;
      padding-bottom: calc(40px + env(safe-area-inset-bottom, 0));
    }
  }
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

const Mascot = styled.img`
  height: 96px;
  width: auto;
  max-width: min(320px, 100%);
  display: block;
  object-fit: contain;
  flex-shrink: 0;
`;

const Bubble = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.footerCard};
  border-radius: 20px;
  padding: 1rem 1.35rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 12px solid ${({ theme }) => theme.colors.footerCard};
  }

  @media (max-width: 600px) {
    &::before {
      display: none;
    }
  }
`;

const CardLabel = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  color: ${({ theme }) => theme.colors.foreground};
  white-space: nowrap;
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.footerLink};
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.navLinkHover};
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export default function UxFooter() {
  return (
    <FooterEl>
      <FooterInner>
        <Mascot src={footerMascot} alt="Bread Friends" />

        <Bubble>
          <CardLabel>Bake with me here</CardLabel>
          <SocialList>
            {socials.map((s) => (
              <SocialLink
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  s.href.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
                aria-label={s.label}
              >
                <img src={s.icon} alt="" />
              </SocialLink>
            ))}
          </SocialList>
        </Bubble>
      </FooterInner>
    </FooterEl>
  );
}
