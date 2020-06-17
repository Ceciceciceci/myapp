import React, { Component } from 'react';
import projimg1 from '../imgs/proj1-img.jpg';
import projimg2 from '../imgs/proj2-img.jpg';

class Projects extends Component{
    render(){
        return (
            <div className="project-container">
                <h1>projects!</h1>
                <ul className="proj-list">
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>01.</b></p>
                            <p className="date">2019 to 2020</p>
                            <div className="divider"></div>
                            <h4>CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS</h4>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src={projimg1} />
                            {/* or carousel */}
                        </div>
                        <div className="project-description">
                           <p className="tech">HTML, CSS3, Javascript, PHP, Photoshop</p>
                           <p>A design site I helped with the UX designer. This showcases the company's current styling for the new and upcoming website look!</p>
                           <a className="goToProj" href="http://classicvacationsdesign.com/" title="go to Classic Vacations project">view website</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>02.</b></p>
                            <p className="date">2020</p>
                            <div className="divider"></div>
                            <h4>NOOK NET: ANIMAL CROSSING GUIDE SITE</h4>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src={projimg2} />
                        </div>
                        <div className="project-description">
                        <p className="tech">HTML, CSS3, Javascript, JQuery, Bootstrap</p>
                           <p>I volunteered to join a team of devs to build a guide site people can come to for Animal Crossing information.</p>
                           <a className="goToProj" href="https://nooknet.net/" title="go to Nook Net site">view website</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>03.</b></p>
                            <p className="date">2017</p>
                            <div className="divider"></div>
                            <h4>DISNEY UI INTERN WORK</h4>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            
                        </div>
                        <div className="project-description">
                            
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Projects;