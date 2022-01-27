import React, {useState} from 'react';
import flower from '../images/svgs/flower.svg';
import star from '../images/svgs/star.svg';
import Toggle from '../components/Toggle';
import {Link} from 'react-router-dom';

export default function Header ({navigation, theme, toggleTheme, setActiveState, activeState}){

    const handleClick = (e, i) => {
        setActiveState(true)
    }

    const headerList = navigation.map((item, i) => {
        return (<li>
                    <a className={activeState ? "selected" : ""} 
                        key={item.key} 
                        id={`#${item.key}`} 
                        href={item.link}
                        onClick={(event) => handleClick(event, item.id)}
                    >
                        {item.key}
                    </a>
                </li>)
    });
    const icon = theme === 'light' ? <img src={flower} alt="Home" /> : <img src={star} alt="Home" />

    return (
        <header>
            <div className="homelogo">
                <Link to="/">{icon}</Link>
            </div>
            <nav>
                {/* <img src={navbanner} alt="navigation background" /> */}
                <ul className="nav-links">
                    { headerList } 
                </ul>
            </nav>
            <div className="themeToggle">
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    )
}