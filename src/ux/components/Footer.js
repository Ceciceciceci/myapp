import React, { useState } from 'react';
import styled from 'styled-components';

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/ichi_nese/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ichiknees/' },
  { label: 'Behance', href: 'https://www.behance.net/cecitran94fab0' },
  { label: 'Email', href: 'mailto:cecitran94@gmail.com' },
];

const FooterEl = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Copyright = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: 0.04em;
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.socialHoverColor : theme.colors.mutedForeground};
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.socialHoverBg : 'transparent'};
  border: 1.5px solid
    ${({ $hovered, theme }) =>
      $hovered ? theme.colors.socialHoverBorder : 'transparent'};
  text-decoration: none;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
  padding: 0.35rem 0.875rem;
  border-radius: 999px;
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
  return (
    <FooterEl>
      <FooterInner>
        <Copyright>© {new Date().getFullYear()} Cecilia Tran</Copyright>
        <SocialList>
          {socials.map((s) => (
            <SocialItem key={s.label} {...s} />
          ))}
        </SocialList>
      </FooterInner>
    </FooterEl>
  );
}
