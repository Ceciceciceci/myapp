import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { displayFont } from '../styles';
import { MenuIcon, CloseIcon } from '../icons';
import logo from '../../images/ceci-shaker-charm.png';

const links = [
  { label: 'Work', to: '/ux/projects' },
  { label: 'About', to: '/ux/about' },
  { label: 'Art', to: '/ux/art' },
];

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.navBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};
`;

const NavInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex: 1;
  min-width: 0;
`;

const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const BrandText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BrandName = styled.span`
  ${displayFont}
  display: inline-block;
  color: ${({ theme }) => theme.colors.navName};
  font-weight: 400;
`;

const BrandTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.displayLight};
  color: ${({ theme }) => theme.colors.navSubtitle};
  font-weight: 300;

  @media (max-width: 899px) {
    display: none;
  }
`;

const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  flex: 1;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  && {
    font-family: ${({ theme }) => theme.fonts.displayLight};
    font-size: 16px;
    font-weight: ${({ $active }) => ($active ? 500 : 300)};
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
    transition: color 0.2s, font-weight 0.2s;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};
  z-index: 40;
  padding: 1.5rem 20px;
  gap: 1.25rem;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  && {
    font-family: ${({ theme }) => theme.fonts.displayLight};
    font-size: 16px;
    font-weight: ${({ $active }) => ($active ? 500 : 300)};
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
    padding-left: ${({ $active }) => ($active ? '0.75rem' : '0')};
    border-left: 2px solid
      ${({ $active, theme }) => ($active ? theme.colors.navLinkActive : 'transparent')};
    transition: color 0.2s, border-color 0.2s;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
    border-left-color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLinkHover};
  }
`;

const isActive = (pathname, to) => {
  if (to === '/ux/projects') {
    return pathname.startsWith('/ux/projects');
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
          <Brand to="/ux" onClick={() => setOpen(false)}>
            <BrandIcon>
              <img src={logo} alt="" />
            </BrandIcon>
            <BrandText>
              <BrandName>CECILIA TRAN</BrandName>
              <BrandTitle>{'  UX Engineer && Product Designer'}</BrandTitle>
            </BrandText>
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
