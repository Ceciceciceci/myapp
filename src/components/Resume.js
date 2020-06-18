import React, { Component } from 'react';

class Resume extends Component{
    render(){
        return (
            <section className="resume">
                    <h1>resume.</h1>
                    <div className="resume-container">
                        <div className="school">
                            <h2>Cecilia Tran</h2>
                            <h3>Education</h3>
                            <p>San Jose State University</p>
                            <p>2012 to 2017</p>
                            <p>Bachelor's of Science - </p>
                            <p>Software Engineering</p>
                            
                            <h3>Email</h3>
                            <p><a href="mailTo:cecitran94@gmail.com">cecitran94@gmail.com</a></p>
                        </div>

                        <div className="job-list">
                            <div className="job">
                                 <h3>Classic Vacations / Expedia Groups : Web Developer &amp;&amp; UI/UX Engineer</h3>
                                <p className="date">Jan 2019 to CURRENT</p>
                                <p className="job-desc">
                                Javascript , Drupal, CSS3, HTML5, PHP, MySQL, React 
                                <br />
                                <li>Created and optimized Javascript and PHP code for different pages and designs for the Classic Vacations site. </li>
                                <li>Wireframed and worked with the UX designer and the developer team in India to successfully build a better usable website and optimize the design code. </li>
                                <li>Created a style guide with the UX designer to help organize the site's new style and brand.</li>
                                <li>Self learned as the only engineer on the team for the first 4 months, a new language and infrastructure, Drupal and php. Introduced React to the team for possibility for changing frameworks to better optimize the site.</li>
                                <li>Minimized the amount of libraries imported with CDNs needed for design prototypes into a few lines of Javascript.  Made the prototypes clean and robust enough for use in development. </li>
                                <li>Created new documentation for any existing and new code worked on and organized it into documents and onto JIRA boards as the old code didn't have prior documentation to explain certain features.</li>
                                </p>
                            </div>
                            <div className="job">
                                <h3>Aerohive Networks : Full Stack Engineer</h3>
                                <p className="date">Jan 2018 to Dec 2019</p>
                                <p className="job-desc">
                                HTML5, CSS, Javascript, Perl (backend), Vue.js, Catalyst, Distributed systems, Basalmiq
                                <br />
                                <li>Created frontend features and wireframes for a distributed network cluster system application A3.</li>
                                <li>Introduced and integrated Vue.js library into project front end framework change from Catalyst.</li>
                                <li>Communicated with overseas team in China to discuss tasks and complete them</li>
                                <li>Redesigned and drew up wireframes for part of the A3 application to help fix current issues in the displaying new information and features and then develop the features frontend and backend with backend engineers.</li>
                                </p>
                            </div>
                            <div className="job">
                                <h3>The Walt Disney Company : Web UI Developer Intern</h3>
                                <p className="date">Jun 2017 to Jan 2018</p>
                                <p className="job-desc">SAS, HTML5, CSS, JS, Google Charts API, JQuery, UI/UX wireframing, Python, Basalmiq
                                <br />
                                <li>Successfully updated/modified the Disney Theatrical System with SAS, Javascript, CSS3, Google Charts API, JQuery</li>
                                <li>Created and wireframed a new UX/UI flow for custom query selection for a generated proposal application for using Basalmiq and Powerpoint</li>
                                <li>Multitasked and redid documentation on multiple projects at a time to develop new client needs and write tests using Python, Javascript</li>
                                <li>Modified layouts and code to improve documentation and flow of the website.</li>
                                <li>Wireframed flow for future query function application.</li>
                                </p>
                            </div>
                            <div className="job">
                                <h3>CISCO : Hardware QA Engineering Intern</h3>
                                <p className="date">Jun 2016 to Aug 2016</p>
                                <p className="job-desc">
                                Python, JS, HTML
                                <br />
                                <li>Wrote new scripts to help further improve the QA team’s ability to diagnose hardware components in routers/chassis from outside of the lab and to test untested components. Used TMUX, Linux, and TCL to write scripts.</li>
                                <li>Tested hardware and scripts in the server lab.</li>
                                <li>Improved the QA website by adding small helpful features such as recognizing who is running a test at a certain time.</li>
                                </p>
                            </div> 
                        </div>
                    </div>
            </section>
        )
    }
}

export default Resume;