import React from 'react'
import Footer from '../Footer'
import multistar from '../../images/svgs/multistar.svg'

export default function Resume({theme, toggleTheme}) {
    let jobs = [
      { 
        company: 'Dreamworks', 
        title: 'Software Engineer', 
        date:'Jan 2021 to CURRENT',
        location: 'Glendale, CA',
        tools: 'Javascript, CSS3, HTML5, Python, React, Polymer',
        jobDesc: [
            "Developed web tool features to help improve the pipeline process for artists and technical directors",
            "Documented and presented changes for app routes for the React transition from Polymer to make the code base more efficient",
            "In tandem with the UX team, discussed hi-fi mockups to clear up and decrease the number of API calls by 50% to view animation assets"
        ]
      },
      { 
          company: 'Future Motion', 
          title: 'Software Engineer', 
          date:'Oct 2020 to Dec 2020',
          location: 'Santa Cruz, CA',
          tools: 'Javascript, CSS3, HTML5, Python, React',
          jobDesc: [
              "Created and improved front-end features for an internal web tool to speed up factory picking, packing, and shipping process of One Wheel EV skateboards to be 5 times faster",
              "Discussed UI ideas to improve UX before development stage"
          ]
      },
      { 
          company: 'Classic Vacations', 
          title: 'Web Developer', 
          date:'Jan 2019 to Sept 2020', 
          location: 'San Jose, CA',
          tools: 'Javascript, Drupal, CSS3, HTML5, PHP, MySQL, React',
          jobDesc: [
              "Wireframed and worked with the UX designer and the developer team in India to successfully build a better usable website and optimize the design code",
              "Created a style guide with the UX designer to help organize the site's new style and brand",
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

    let jobsList = jobs.map((item, i) => {

        let jobDescItems = item.jobDesc.map((item, i ) => {
            return(
                <li className="job-desc" key={i}>{item}</li>
            )
        })

        return (
          <div className='jobtitle' data-index={`job-${i}`}>
              <p className="date">{item.date}</p>
              <p className="company"><b>{item.company.toUpperCase()} / {item.title.toUpperCase()}</b></p>
              {/* <p className="tools">{item.tools}</p> */}
              <ul>{jobDescItems}</ul>
          </div>
        )
    })

    return (
      <section className="resume-section">
            <h1>Cecilia_Tran_2022.resume</h1>
            <div className="resume-part">
                <div className="resume-left">
                    <h3 className="resume-title ex">EXPERIENCE</h3>
                    {jobsList}
                </div>
                <div className="resume-right">
                    <div className="education">
                        <h3 className="resume-title ed">EDUCATION</h3>
                        <li>
                            <p className='date'>2020-2021</p>
                            <p><b>UC Irvine, CE</b></p>
                            <p className='thin'>UX and UI Design</p>
                        </li>
                        <li>
                            <p className='date'>2012-2017</p>
                            <p><b>San Jose State University</b></p>
                            <p className='thin'>Bachelors of Software Engineering</p>
                        </li>
                    </div>
                    <div>
                        <h3 className="resume-title st">SKILLS & TOOLS</h3>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>ReactJS</li>
                        <li>HTML</li>
                        <li>NodeJS</li>
                        <li>MySQL</li>
                        <li>Wireframing / Rapid Prototyping</li>
                        <li>VS Code</li>
                        <li>Git / JIRA / Confluence</li>
                        <li>Adobe Photoshop / Illustrator</li>
                        <li>Figma</li>
                        <li>Miro</li>
                        <li>AWS: Route 53, S3</li>
                    </div>
                    <img src={multistar} alt="star" />
                </div>
            </div>
            <Footer />
      </section>
    )

}