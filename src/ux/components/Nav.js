import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { displayFont } from '../styles';
import { MenuIcon, CloseIcon } from '../icons';
import logo from '../../images/ceci-bread-logo.png';

const links = [
  { label: 'work', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'art', to: '/art' },
];

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.navBg};
`;

const NavInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.125rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 1rem 1.25rem;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  min-width: 0;
`;

const BrandIcon = styled.div`
  height: 36px;
  width: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  img {
    height: 36px;
    width: auto;
    display: block;
    object-fit: contain;
  }
`;

const BrandName = styled.span`
  ${displayFont}
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.navName};
  font-weight: 400;
  white-space: nowrap;
`;

const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  && {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.typography.baseSize};
    font-weight: ${({ $active }) => ($active ? 700 : 400)};
    text-decoration: none;
    white-space: nowrap;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
    transition: color 0.2s ease, font-weight 0.2s ease;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

const MenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.navLink};
  cursor: pointer;
  padding: 0.25rem;
  flex-shrink: 0;

  @media (min-width: 900px) {
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
  background: ${({ theme }) => theme.colors.navBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 40;
  padding: 1.5rem 1.25rem;
  gap: 1.25rem;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  && {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.typography.baseSize};
    font-weight: ${({ $active }) => ($active ? 700 : 400)};
    text-decoration: none;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
    transition: color 0.2s ease, font-weight 0.2s ease;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

const isActive = (pathname, to) => {
  if (to === '/') {
    return pathname === '/' || pathname.startsWith('/projects');
  }
  return pathname === to || pathname.startsWith(`${to}/`);
};

export default function UxNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <NavInner>
          <Brand to="/" onClick={() => setOpen(false)}>
            <BrandIcon>
              <img src={logo} alt="" />
            </BrandIcon>
            <BrandName>Cecilia Tran</BrandName>
          </Brand>

          <DesktopLinks>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                $active={isActive(pathname, link.to)}
                aria-current={isActive(pathname, link.to) ? 'page' : undefined}
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
