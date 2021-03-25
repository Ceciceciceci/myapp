import React from 'react';

import projimg1 from '../../images/proj1-img.jpg';
import projimg2 from '../../images/proj2-img.jpg';
import projimg3 from '../../images/proj3-img.jpg';
import projimg4 from '../../images/proj4-img.jpg';

import photoframe from '../../images/svgs/photoframe.svg';

export default function Projects() {

  let projects = [
    {
      idx: 1,
      title: 'CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS',
      date: '2019 to now',
      images: projimg1,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries.',
          links:[
            {
              caption: 'classic vacation design site',
              link: 'http://classicvacationsdesign.com/'

            }, {
              caption: 'classic vacation site',
              link: 'http://classicvacations.com/'
            }
          ]
      }
      
    },
    {
      idx: 2,
      title: 'CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS',
      date: '2019 to now',
      images: projimg2,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries.',
          links:[
            {
              caption: 'classic vacation design site',
              link: 'http://classicvacationsdesign.com/'

            }, {
              caption: 'classic vacation site',
              link: 'http://classicvacations.com/'
            }
          ]
        }
      
    },
    {
      idx: 3,
      title: 'CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS',
      date: '2019 to now',
      images: projimg3,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries.',
          links:[
            {
              caption: 'classic vacation design site',
              link: 'http://classicvacationsdesign.com/'

            }, {
              caption: 'classic vacation site',
              link: 'http://classicvacations.com/'
            }
          ]
        }
      
    },
    {
      idx: 4,
      title: 'CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS',
      date: '2019 to now',
      images: projimg4,
      description:
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries.',
          links:[
            {
              caption: 'classic vacation design site',
              link: 'http://classicvacationsdesign.com/'

            }, {
              caption: 'classic vacation site',
              link: 'http://classicvacations.com/'
            }
          ]
        }
    }
  ]

  let projList = projects.map((item, i) => {

      let linkList = item.description.links.map((item, i) =>{
          return (
            <li><a href={`${item.link}`}>{item.caption}</a></li>
          )
      })
      return (
      <div className="project" data-index={`proj-${i}`}>
          <div className="proj-info"> 
            <h3><b>{item.title}</b></h3>
            <p>{item.date}</p>
            <p>{item.description.tech}</p>
            <p>{item.description.paragraph}</p>
          </div>
          <div className="photo">
            <img src={photoframe} />
            <img className="proj-image" src={item.images} alt='project image'/>
            <p>
              {linkList}
            </p>
          </div>
      </div>
      )
  })

  return (  
    <section className="proj-section">
      <div className="speech-bubble">
          <div className="speechbubble">
              <h3 className="speech-text">PROJECTS!</h3>
          </div>
      </div>
      <div className="projects">
        {projList}
      </div>
    </section>
  )
}
