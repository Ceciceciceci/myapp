import React, { Component } from 'react';
import logo from '../imgs/dogbread2.png';

class About extends Component{
    render(){
        return (
            <section id="about" className="about-container">
                <h3>Hello! <p>A little about <span className="ff-s-1"> me</span></p></h3>
                <div className="about-desc">
                    I'm a hybrid between a <span className="ff-s">full-stack dev</span> (with a main focus in front-end) and a <span className="ff-s">ui / ux designer</span> . I graduated from San Jose State University with a bachelor's in a Software Engineering degree. 
                    <p>Currently located in California and a Web Developer working at Expedia with Classic Vacations.</p>
                    <p>On my free time I enjoy <b>learning new front-end tech, drawing, <u>designing</u>, <i>taking photos</i>, <b>games</b> and puzzles.</b> I am also an avid bread lover; below is my dog bread logo that have been sold on sweaters. I watch a lot of anime and cartoons and they have been my source of inspiration.</p>
                    <p>Focusing on web/mobile responsive app development and product design. I am currently delving in ReactJS, CSS3, and Gatsby after work.</p>
                </div>
                <img src={logo} width="50%"/>
            </section>
        )
    }
}

export default About;