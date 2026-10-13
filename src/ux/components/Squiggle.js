import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem 0 2.25rem;
  color: ${({ theme }) => theme.colors.accentGreen};

  svg {
    width: 72px;
    height: auto;
    display: block;
  }
`;

export default function Squiggle({ color, className }) {
  return (
    <Wrap className={className} aria-hidden="true">
      <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 14C10 4 16 20 24 12C32 4 36 18 44 11C52 4 58 17 66 10C70 7 74 9 76 12"
          stroke={color || 'currentColor'}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrap>
  );
}
