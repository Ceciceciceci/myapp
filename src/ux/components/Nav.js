import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon, CloseIcon } from '../icons';

const links = [
  { label: 'Home', to: '/ux' },
  { label: 'Projects', to: '/ux/projects' },
  { label: 'Art', to: '/ux/art' },
  { label: 'About', to: '/ux/about' },
];

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  height: ${({ theme }) => theme.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  letter-spacing: -0.03em;
  font-size: 1rem;
`;

const DesktopLinks = styled.div`
  display: none;
  gap: 2.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.foreground : theme.colors.mutedForeground};
  text-decoration: none;
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-bottom: 2px;
  border-bottom: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const MenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  padding: 0.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileDrawer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${({ theme }) => theme.navHeight};
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 40;
  padding: 1.5rem 2rem;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.foreground : theme.colors.mutedForeground};
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-left: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  padding-left: 1rem;
`;

const isActive = (pathname, to) => {
  if (to === '/ux') return pathname === '/ux' || pathname === '/ux/';
  return pathname.startsWith(to);
};

export default function UxNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <NavInner>
          <Logo to="/ux" onClick={() => setOpen(false)}>
            cecilia tran
          </Logo>

          <DesktopLinks>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                $active={isActive(pathname, link.to)}
              >
                {link.label}
              </NavLink>
            ))}
          </DesktopLinks>

          <MenuButton
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </NavInner>
      </NavBar>

      {open && (
        <MobileDrawer>
          {links.map((link) => (
            <MobileLink
              key={link.to}
              to={link.to}
              $active={isActive(pathname, link.to)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </MobileLink>
          ))}
        </MobileDrawer>
      )}
    </>
  );
}
