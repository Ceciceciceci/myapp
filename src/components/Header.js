import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    closeMenu(){
        let navLinks = document.querySelector(".nav-links");
        if(navLinks.classList.contains('showNav')){
            navLinks.classList.remove('showNav');
        }
    }
    
    openMenu(){
        let navLinks = document.querySelector(".nav-links");
        if(navLinks.classList.contains('showNav')){
            navLinks.classList.remove('showNav');
          } else {navLinks.classList.add('showNav'); }
    }
    
    render(){
            const{ navigation } = this.props;
            const headerList = navigation.map(navItem => {
                if (navItem.name === "header"){
                    return(
                        <ul className="nav-links" key={navItem.id}>
                            <li className="home-link" onClick={this.closeMenu}><Link to="/">home</Link></li>
                            <li><Link className="logo" to="/" onClick={this.closeMenu}>
                                    <svg width="169" height="141" viewBox="0 0 169 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="169" height="141">
                                        <ellipse cx="84.5" cy="70.5" rx="84.5" ry="70.5" fill="#C46D24"/>
                                        </mask>
                                        <g mask="url(#mask0)">
                                        <ellipse cx="84.5" cy="70.5" rx="84.5" ry="70.5" fill="#C46D24"/>
                                        <line x1="36.427" y1="16.4038" x2="106.404" y2="54.573" stroke="#E8DDC7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="61.427" y1="0.403826" x2="131.404" y2="38.573" stroke="#E8DDC7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="106.631" y1="-4.58307" x2="36.4169" y2="33.1488" stroke="#E8DDC7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="131.631" y1="16.4169" x2="61.4169" y2="54.1488" stroke="#E8DDC7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li><a href="/#about" onClick={this.closeMenu}>about </a></li>
                            <li><Link to="/projects" onClick={this.closeMenu}>projects</Link></li>
                            <li><a href="https://ceciceciceci.github.io/artindex.html" target="_blank" onClick={this.closeMenu}>art</a></li>
                            <li><Link to="/contact" onClick={this.closeMenu}>contact</Link></li>
                        </ul>
                    )
                }
            })
            return (
                <header>
                    <nav>
                        <div>
                            <div className="handle" onClick={this.openMenu}><b>menu</b></div>
                            { headerList } 
                        </div>
                    </nav>
                </header>
            )
        }
}

export default Header;