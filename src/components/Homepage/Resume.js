import React from 'react'

export default function Resume() {
    let jobs = [
      { 
        company: 'DreamWorks', 
        title: 'Software Engineer', 
        date:'Jan 2021 to CURRENT',
        location: 'Glendale, CA',
        tools: 'Javascript, CSS3, HTML5, Python, React, Polymer',
        jobDesc: [
            "Working web tool features for TDs and artists to use."
        ]
      },
      { 
          company: 'Future Motion', 
          title: 'Software Engineer', 
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

    return (
      <section className="resume-section">
            HI I"M RESUME SECTIONNN
      </section>
    )

}