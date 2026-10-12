import React from 'react';
import styled from 'styled-components';
import footerMascot from '../../images/footer-mascot.png';

const socials = [
  { label: 'Email', href: 'mailto:cecitran94@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ceciliaaa-tran/' },
];

const FooterEl = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.footerBg};
  margin-top: 3rem;
  padding: 2.5rem 2rem;
  padding-bottom: calc(2.5rem + env(safe-area-inset-bottom, 0));

  @media (max-width: 600px) {
    padding: 1.75rem 1.25rem;
    padding-bottom: calc(1.75rem + env(safe-area-inset-bottom, 0));
  }
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.footerCard};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 100%;
`;

const Mascot = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
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
  gap: 1.25rem;
`;

const SocialLink = styled.a`
  && {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.typography.baseSize};
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footerLink};
    transition: color 0.2s ease;
    white-space: nowrap;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

export default function UxFooter() {
  return (
    <FooterEl>
      <FooterInner>
        <Card>
          <Mascot>
            <img src={footerMascot} alt="" aria-hidden="true" />
          </Mascot>

          <CardBody>
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
                >
                  {s.label}
                </SocialLink>
              ))}
            </SocialList>
          </CardBody>
        </Card>
      </FooterInner>
    </FooterEl>
  );
}
