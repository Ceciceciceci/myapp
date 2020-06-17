import React, { Component } from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="triangle-banner">
                <div id="triangle-topright"></div>
                <div id="triangle-bottomright"></div>
            </div>
            <div className="inner-footer">
                <p className="quote">Let's Catch Up!</p>
                <ul> 
                    <li><a href="https://www.linkedin.com/in/ceciliaaa-tran/">LINKEDIN</a></li>
                    <li><a href="https://github.com/Ceciceciceci">GITHUB</a></li>
                    <li><a href="https://www.behance.net/cecitran94fab0">BEHANCE</a></li>
                    <li><a href="mailTo:cecitran94@gmail.com">EMAIL</a></li>
                </ul>
                <p className="cr">© 2020 Cecilia Tran</p>
            </div>
        </footer>
    )
}

export default Footer;