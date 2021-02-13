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
                                    home
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