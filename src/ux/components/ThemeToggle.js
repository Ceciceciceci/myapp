import React from 'react';
import styled from 'styled-components';

const Track = styled.button`
  appearance: none;
  cursor: pointer;
  width: 68px;
  height: 34px;
  border-radius: 999px;
  border: 2.5px solid ${({ theme }) => theme.colors.toggleBorder};
  background: ${({ theme }) => theme.colors.toggleTrack};
  padding: 0 5px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

const Slot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SunIcon = styled.svg`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.toggleSun};
`;

const Circle = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2.5px solid ${({ $color }) => $color};
  background: ${({ $filled, $color }) => ($filled ? $color : 'transparent')};
`;

export default function ThemeToggle({ mode = 'light', onToggle }) {
  const isDark = mode === 'dark';

  return (
    <Track
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
    >
      <Slot>
        {isDark ? (
          <Circle $color="#FFFFFF" $filled={false} aria-hidden="true" />
        ) : (
          <SunIcon viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="3.5" />
            <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
              <line x1="12" y1="1.5" x2="12" y2="4.2" />
              <line x1="12" y1="19.8" x2="12" y2="22.5" />
              <line x1="1.5" y1="12" x2="4.2" y2="12" />
              <line x1="19.8" y1="12" x2="22.5" y2="12" />
              <line x1="4.2" y1="4.2" x2="6.1" y2="6.1" />
              <line x1="17.9" y1="17.9" x2="19.8" y2="19.8" />
              <line x1="4.2" y1="19.8" x2="6.1" y2="17.9" />
              <line x1="17.9" y1="6.1" x2="19.8" y2="4.2" />
            </g>
          </SunIcon>
        )}
      </Slot>
      <Slot>
        {isDark ? (
          <Circle $color="#A6A6A6" $filled aria-hidden="true" />
        ) : (
          <Circle $color="#F4C16E" $filled={false} aria-hidden="true" />
        )}
      </Slot>
    </Track>
  );
}
