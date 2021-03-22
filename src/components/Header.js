import React from 'react';
import styled from 'styled-components';
import navbanner from '../images/svgs/navbanner.svg';
import flower from '../images/svgs/flower.svg';
import star from '../images/svgs/star.svg';
import Toggle from '../components/Toggle';
import {Link} from 'react-router-dom';

export default function Header (props){
    const { navigation, toggleTheme } = props;

    const headerList = Object.keys(navigation).map((item, i) => {
        return <li><a className={`job-${i}`} href={navigation[item]}>{item}</a></li>
    });
    const icon = props.theme === 'light' ? <img src={flower} alt="Home" /> : <img src={star} alt="Home" />

    return (
        <header>
            <div className="homelogo">
                <Link to="/">{icon}</Link>
            </div>
            <nav>
                <img src={navbanner} alt="navigation background" />
                <ul className="nav-links">
                    { headerList } 
                </ul>
            </nav>
            <div className="themeToggle">
                <Toggle theme={props.theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    )
}