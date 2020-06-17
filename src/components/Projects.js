import React, { Component } from 'react';
import projimg1 from '../imgs/proj1-img.jpg';
import projimg2 from '../imgs/proj2-img.jpg';
import projimg3 from '../imgs/proj3-img.jpg';

class Projects extends Component{
    render(){
        return (
            <div className="project-container">
                <h1>projects!</h1>
                <ul className="proj-list">
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>01.</b></p>
                            <p className="date">2019 to now</p>
                            <div className="divider-2"></div>
                            <div className="divider"></div>
                            <h4>CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS</h4>
                            <div className="divider"></div>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src={projimg1} />
                            {/* or carousel */}
                        </div>
                        <div className="project-description">
                           <p className="tech">HTML, CSS3, Javascript, PHP, Photoshop, Jquery, Bootstrap</p>
                           <p>A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries.</p>
                           <a className="goToProj" href="http://classicvacationsdesign.com/" title="go to Classic Vacations project">view website</a>
                           <a className="goToProj" href="http://classicvacations.com/" title="go to Classic Vacations">classic vacations site</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>02.</b></p>
                            <p className="date">2020</p>
                            <div className="divider-2"></div>
                            <div className="divider"></div>
                            <h4>NOOK NET: ANIMAL CROSSING GUIDE SITE</h4>
                            <div className="divider"></div>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src={projimg2} />
                        </div>
                        <div className="project-description">
                            <p className="tech">HTML, CSS3, Javascript, JQuery, Photoshop, Discord, PHP, Composer</p>
                           <p>I volunteered to join a team of devs to build a guide site people can come to for Animal Crossing information. I am currently working through some Collections pages that will be item checklists.</p>
                           <a className="goToProj" href="https://nooknet.net/" title="go to Nook Net site">view website</a>
                           <a className="goToProj" href="https://codepen.io/ichiknees/pen/vYNeyjz" title="example prototype">view example test ui</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>03.</b></p>
                            <p className="date">2020</p>
                            <div className="divider-2"></div>
                            <div className="divider"></div>
                            <h4>MY NEW WEBSITE</h4>
                            <div className="divider"></div>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src={projimg3} />
                        </div>
                        <div className="project-description">
                            <p className="tech">HTML, CSS3, Javascript, ReactJS, AWS Amplify, Route 53</p>
                            <p>I wanted to experiment with ReactJS and started working on this site because of the type of challenges I wanted to take on that my current role didn't provide.  I also wanted to play around more with CSS Grids and type.</p>
                            <a className="goToProj" href="https://www.behance.net/gallery/97978257/New-Website-WIP-Record-1" title="See wireframes">view drafts</a>
                            <a className="goToProj" href="https://www.cecitran.me" title="See graphical dashboard">view website</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                        <div className="project-heading">
                            <p className="num"><b>04.</b></p>
                            <p className="date">2017</p>
                            <div className="divider-2"></div>
                            <div className="divider"></div>
                            <h4>DISNEY UI INTERNSHIP INTERVIEW / OLD SITE</h4>
                            <div className="divider"></div>
                            <div className="divider-2"></div>
                        </div>
                        <div className="project-img">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3871c386655807.5d9fd241d1d8a.png" />
                        </div>
                        <div className="project-description">
                            <p className="tech">HTML, CSS3, Javascript, Chart.js</p>
                           <p>The interview project I was given to design and put together a graphical dashboard based on the JSON information given. I did everything from wireframes, layout, storyboard and the final coded version.</p>
                           <a className="goToProj" href="https://codepen.io/ichiknees/pen/NjdxEK" title="See old side design">view website</a>
                           <a className="goToProj" href="https://ceciceciceci.github.io/datasetreport.html" title="See graphical dashboard">view graphical dashboard</a>
                           <a className="goToProj" href="https://www.behance.net/gallery/86655807/Web-UI-Project-for-Interview" title="go to presentation slides">view wireframes / presentation</a>
                        </div>
                    </li>
                    <li className="proj-list-item">
                       
                    </li>
                </ul>
            </div>
        )
    }
}

export default Projects;