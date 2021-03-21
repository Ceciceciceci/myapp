import React from 'react';
import me3 from '../../images/me3.png';
import imgbg from '../../images/svgs/imgbg.svg';
import me4 from '../../images/me4.png';
import me5 from '../../images/me5.png';
import cloud from '../../images/svgs/cloud.svg';
import daisy from '../../images/svgs/daisy.svg';
import breadbowlplant from '../../images/breadbowlplant.png';

import speechbubblestemleft from '../../images/svgs/speechbubblestemleft.svg';
import speechbubblestemright from '../../images/svgs/speechbubblestemright.svg';


export default function About(props) {

    let jobs = [
        { 
          company: 'DreamWorks', 
          title: 'Software Engineer - Web Tools', 
          date:'Jan 2021 to CURRENT',
          location: 'Glendale, CA',
          tools: 'Javascript, CSS3, HTML5, Python, React, Polymer',
          jobDesc: [
              "Working web tool features for TDs and artists to use."
          ]
        },
        { 
            company: 'Future Motion', 
            title: 'Software Engineer - Web Tools', 
            date:'Oct 2020 to Dec 2020',
            location: 'Santa Cruz, CA',
            tools: 'Javascript, CSS3, HTML5, Python, React',
            jobDesc: [
                "Created front-end features for an internal tool on web to speed up factory picking, packing, and shipping process of EV skateboards.",
            ]
        },
        { 
            company: 'Classic Vacations', 
            title: 'Web Developer', 
            date:'Jan 2019 to Sept 2020', 
            location: 'San Jose, CA',
            tools: 'Javascript, Drupal, CSS3, HTML5, PHP, MySQL, React',
            jobDesc: [
                "Wireframed and worked with the UX designer and the developer team in India to successfully build and deploy, and optimize a new site redesign.",
                "Created a style guide with the UX designer to help organize the site's new style and brand.",
                "Self learned as the only engineer on the team for the first 4 months, a new language and infrastructure, Drupal and PHP. Introduced React to the team for possibility for changing frameworks to better optimize the site.",
                "Minimized the amount of libraries imported with CDNs needed into a few lines of Javascript.",
                "Created new documentation for any existing and new code worked on and organized it into documents and onto JIRA boards as the old code didn't have prior documentation to explain certain features."
            ]
        },
        { 
            company: 'Aerohive Networks', 
            title: 'Fullstack Engineer', 
            date:'Jan 2018 to Dec 2019', 
            location: 'Milpitas, CA',
            tools: 'HTML5, CSS, Javascript, Perl (backend), Vue.js, Catalyst, Distributed systems, Basalmiq',
            jobDesc: [
                "Introduced and integrated Vue.js library into project front end framework change from Catalyst.",
                "Redesigned and drew up wireframes for part of the A3 application to help fix current issues in the displaying new information and features and then develop the features frontend and backend with backend engineers in China."
            ]
        },
        { 
            company: 'Walt Disney Company: Parks & Resorts', 
            title: 'Web UI Developer Intern', 
            date:'Jun 2017 to Jan 2018', 
            location: 'Orlando, FL',
            tools: 'SAS, HTML5, CSS, JS, Google Charts API, JQuery, UI/UX wireframing, Python, Basalmiq',
            jobDesc: [
                "Successfully updated/modified the Disney Theatrical System to handle theatre data.",
                "Wireframed a new flow for custom query selection for a generated proposal application for using Basalmiq and Powerpoint.",
                "Multitasked and redid documentation on multiple projects at a time to develop new client needs and write tests using Python, Javascript"
            ]
        }
      ]
      const tools = ['VS Code', 'Github / JIRA / Confluence', 'AWS / S3', 'Wireframing', 'Word / Excel / Powerpoint', 'Photoshop / Illustrator', 'Figma / Miro'];


      let jobList = jobs.map((item, i) => {
          return (
            <div className='job' data-index={`job-${i}`}>
                <p><b>{item.company}</b></p>
                <p>{item.title}</p>
                <p>{item.date}</p>
            </div>
          )
      })

    return (
        <section id="about" className="about-section">
            {/* HI I"M ABOUT SECTION */}
            <div className="background"></div>

            <div className="about-me">
                <div className="speech-bubble left">
                    <div className="speechbubble">
                        <h3 className="speech-text">A little about me...</h3>
                    </div>
                    <img className="speechbubblestem left" src={speechbubblestemleft} />
                </div>
                <div className="me3">
                    <img className="imgBg" src={imgbg} height = {'250px'}/>
                    <img className="imgMe" src={me3} height={'320px'} />
                </div>
                <div className="cloud">
                    <img src={cloud} height={'100px'} />
                </div>
                
                <div className="intro">
                    <p>A <strong>software engineer</strong> (with a focus on front-end) and a <strong>ux and ui designer</strong>.
                    I like to design creative solutions for user experiences where tech intersects art. </p>
                    <p>Currently, I am dabbling in ReactJS and Three.js.</p>
                    <p>My hobbies include video games, drawing, graphic design, hiking, watching anime and 
                        cartoons, knitting and baking.</p>
                </div>
            </div>

            <div className="about-work">
                <div className="speech-bubble right">
                    <div className="speechbubble">
                        <h3 className="speech-text">Where I've worked.</h3>
                    </div>
                    <img className="speechbubblestem right" src={speechbubblestemright} />
                </div>
                <div className="m4" style={{width: '320px', height: '150px' }}>
                    <div className="daisies">
                        <img className="daisy" src={daisy} height={'30px'} />
                        <img className="daisy" src={daisy} height={'30px'} />
                        <img className="daisy" src={daisy} height={'30px'} />
                    </div>
                    <img className="imgMe2" src={me4} height={'250px'} />
                </div>
                <button className="btn resume-btn">VIEW RESUME</button>
                <div className="job-list">
                    {jobList}
                </div>
            </div>
            <div className="about-skills">
                <div className="speech-bubble left">
                    <div className="speechbubble">
                        <h3 className="speech-text">Some of my utensils!</h3>
                    </div>
                    <img className="speechbubblestem left" src={speechbubblestemleft} />
                </div>
                <div className="img-group" style={{width: '320px', height: '150px' }}>
                    <img src={me5} height={'320px'} />
                </div>
                <div className="tools">
                    <table>
                        <thead>
                            <th>Tools</th>
                            <th>Languages</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>Github / JIRA / Confluence</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>VS Code / Atom</td>
                                <td>HTML5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="food">
                    <img src={breadbowlplant} height={'250px'} />
                </div>
                
            </div>
        </section>
    );
}