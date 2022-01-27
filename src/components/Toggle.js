import React from 'react';
import { func, string } from 'prop-types';

import styled from 'styled-components';

import {ReactComponent as Sun} from '../images/svgs/sun.svg';
import {ReactComponent as Moon} from '../images/svgs/moon.svg';
//--

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.pageBackground};
  width: 7rem;
  height: 3.7rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;
  }
  svg:first-child{
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  svg:nth-child(2){
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
            <Sun />
            <Moon />
        </ToggleContainer>

    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;