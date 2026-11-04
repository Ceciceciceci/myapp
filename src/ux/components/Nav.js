import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon, CloseIcon } from '../icons';
import ThemeToggle from './ThemeToggle';
import logoSleep from '../../images/nav-logo-sleep.gif';
import logoWake from '../../images/nav-logo-wake.gif';

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
  backdrop-filter: blur(10px);
`;

const NavInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 0.9rem 1.25rem;
    gap: 1rem;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
`;

const BrandIcon = styled.div`
  position: relative;
  height: 36px;
  width: 54px;
  flex-shrink: 0;
`;

const LogoLayer = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  height: 36px;
  width: auto;
  display: block;
  object-fit: contain;
  transform: translateY(-50%);
  pointer-events: none;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
`;

const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  gap: 1.75rem;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  && {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.95rem;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    text-decoration: none;
    white-space: nowrap;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
    transition: color 0.2s ease;
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

const RightCluster = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.75rem;
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
    font-size: 1rem;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    text-decoration: none;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.navLinkActive : theme.colors.navLink};
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

const WAKE_MS = 5000;

export default function UxNav({ mode, onToggleTheme }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [logoMode, setLogoMode] = useState('sleep');
  const [wakeSlot, setWakeSlot] = useState(0);
  const [wakeSrcs, setWakeSrcs] = useState([logoWake, logoWake]);
  const wakeTimerRef = useRef(null);
  const wakeGenRef = useRef(0);
  const wakeSlotRef = useRef(0);

  useEffect(() => {
    const sleepPreload = new Image();
    const wakePreload = new Image();
    sleepPreload.src = logoSleep;
    wakePreload.src = logoWake;
  }, []);

  useEffect(() => {
    const triggerWake = () => {
      const nextSlot = wakeSlotRef.current === 0 ? 1 : 0;
      const gen = ++wakeGenRef.current;
      const nextSrc = `${logoWake}?replay=${gen}`;

      const probe = new Image();
      probe.onload = () => {
        if (wakeGenRef.current !== gen) return;
        setWakeSrcs((srcs) => {
          const copy = [...srcs];
          copy[nextSlot] = nextSrc;
          return copy;
        });
        wakeSlotRef.current = nextSlot;
        setWakeSlot(nextSlot);
        setLogoMode('wake');
      };
      probe.src = nextSrc;

      if (wakeTimerRef.current) {
        clearTimeout(wakeTimerRef.current);
      }
      wakeTimerRef.current = setTimeout(() => {
        setLogoMode('sleep');
        wakeTimerRef.current = null;
      }, WAKE_MS);
    };

    const onClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a') || target.closest('nav')) {
        triggerWake();
      }
    };

    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      if (wakeTimerRef.current) {
        clearTimeout(wakeTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <NavBar>
        <NavInner>
          <Brand to="/" onClick={() => setOpen(false)} aria-label="Home">
            <BrandIcon>
              <LogoLayer src={logoSleep} alt="" $active={logoMode === 'sleep'} />
              <LogoLayer
                src={wakeSrcs[0]}
                alt=""
                $active={logoMode === 'wake' && wakeSlot === 0}
              />
              <LogoLayer
                src={wakeSrcs[1]}
                alt=""
                $active={logoMode === 'wake' && wakeSlot === 1}
              />
            </BrandIcon>
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

          <RightCluster>
            <ThemeToggle mode={mode} onToggle={onToggleTheme} />
            <MenuButton
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </MenuButton>
          </RightCluster>
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
