import React, { Component } from 'react';
import github from '../imgs/svgs/github.svg';
import behance from '../imgs/svgs/behance.svg';
import instagram from '../imgs/svgs/instagram.svg';
import linkedin from '../imgs/svgs/linkedin.svg';

class Contact extends Component{
    render(){
        return (
            <section className="contact">
                <div className="contact-container">
                    <h1>contact?</h1>
                    <h2>
                        <p>You can contact me <a href="mailto:cecitran94@gmail.com" title="at click here my email">through email</a>.
                        You can also check out these sites I have posted my work on. I tend to be experimenting in <a href="https://codepen.io/ichiknees/">Codepen</a> nowadays. Check out <a href="/resume" title="Click to see my resume">my resume</a> if you'd like.</p>
                    </h2>
                    <ul className="contact-links">
                        <li className="link contact-1">
                            <img src={github} />
                            <h4>Github <a href="https://github.com/Ceciceciceci">/Ceciceciceci</a></h4>
                            <p>See some of the code I've uploaded.</p>
                        </li>
                        <li className="link contact-1">
                            <img src={behance} />
                            <h4>Behance <a href="https://www.behance.net/cecitran94fab0">/cecitran94fab0</a> </h4>
                            <p>Artsworks and UI work I worked on through out the years. Some NDA work won't be displayed here.</p>
                        </li>
                        <li className="link contact-1">
                            <img src={instagram} />
                            <h4>Instagram <a href="https://www.instagram.com/ichiknees">/ichiknees</a></h4>
                            <p>My sketches and doodles I do on my free time.</p>
                        </li>
                        <li className="link contact-1">
                            <img src={linkedin} />
                            <h4>LinkedIn <a href="https://www.linkedin.com/in/ceciliaaa-tran/">/ceciliaaa-tran</a></h4>
                            <p>My resume showcasing where I worked.</p>
                        </li>
                        <li className="link"><h4>Twitter <a href="https://www.twitter.com/ichi_nese">/ichi_nese</a></h4></li>
                    </ul>
                </div> 
            </section>
        )
    }
}

export default Contact;