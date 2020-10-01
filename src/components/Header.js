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
                                    <svg width="120" height="108" viewBox="0 0 120 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="108">
                                        <ellipse cx="60" cy="54" rx="60" ry="54" fill="#C46D24"/>
                                        </mask>
                                        <g mask="url(#mask0)">
                                        <ellipse cx="60" cy="54" rx="60" ry="54" fill="#C46D24"/>
                                        </g>
                                        <path d="M35 16C33 11.6 34 8.99999 35 8C36 7 37.7 7 40.5 7C44 7 50 10.5 53 14C55.4 16.8 57 18.5 58 20C59 18.5 62.9 15 74.5 11C89 6.00001 84 12.5 83 14.5C82 16.5 78.5001 19.9999 77.0001 21.4999L77 21.5C75.9802 22.5198 71.8333 24.8333 69.5 26C70 26.5 68.5 25.6 74.5 30C82 35.5 89.5 45.5 84.5 49C79.5 52.5 71.5 49.5 65.5 46.5C60.7 44.1 56.1667 40.5 54.5 39C52 41.5 41 45.5 37 46.5C33 47.5 23 48 21.5 46.5C20 45 21 42 24 38C26.4 34.8 32.3333 31.3333 35 30L42.5 27.5C41 26 37.5 21.5 35 16Z" fill="#FFF3D6"/>
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