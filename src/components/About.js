import React, { Component } from 'react';
import logo from '../imgs/dogbread2.png';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return (
            <section id="about" className="about-container">
                <h3>Hello! <p>A little about <span className="ff-s-1"> me</span></p></h3>
                <div className="about-desc">
                    I'm a hybrid between a <span className="ff-s">software engineer</span> (with a main focus in front-end) and an <span className="ff-s">ux and ui designer</span>. I graduated from San Jose State University with a Bachelor's of Science degree in Software Engineering. Check out <Link to="/resume" title="Click to see my resume"><b>my resume</b></Link> here!
                    <p>Located in California, I've worked for <b>CISCO, Disney, Aerohive Networks, Classic Vacations</b> and done several freelancing work. I currently work at <b>Dreamworks!</b></p>
                    <p>Focusing on web/mobile responsive app development and product design, I also offer these services. I am currently delving in ReactJS and threeJS after work.</p>
                    <p>On my free time I enjoy <b>learning new front-end tech, drawing, <u>designing</u>, <i>photography</i>, <b>games</b> and puzzles.</b> I am also an avid bread lover; below is my dog bread logo that have been sold on sweaters. I watch a lot of anime and cartoons and they have been my source of inspiration.</p>
                </div>
                <img src={logo} width="50%"/>
            </section>
        )
    }
}

export default About;