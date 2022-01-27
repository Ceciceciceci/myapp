import React from 'react';
import Footer from '../Footer'
import pewpew from '../../images/svgs/pewpew.svg'

import projimg1 from '../../images/proj1-img.jpg';
import projimg2 from '../../images/proj2-img.jpg';
import projimg3 from '../../images/proj3-img.jpg';
import projimg4 from '../../images/proj4-img.jpg';

import photoframe from '../../images/svgs/photoframe.svg';

export default function Projects({theme, toggleTheme}) {

  let projects = [
    {
      idx: 1,
      title: 'CLASSIC VACATIONS WEBSITE PROTOTYPES AND FINALS',
      date: '2019 - 2020',
      images: projimg1,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'A design site I helped with the UX designer. This showcases the current styling for the new and upcoming website look! The designer wanted to use Jquery and Bootstrap, so the site is built on those libraries. I also built features for the front-end of this.',
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
      title: 'NOOK NET: ANIMAL CROSSING GUIDE SITE',
      date: '2020',
      images: projimg2,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, JQuery, Photoshop, Discord, PHP, Composer',
          paragraph: 'I volunteered to join a team of devs to build a guide site people can come to for Animal Crossing information. I am currently working through some Collections pages that will be item checklists.',
          links:[
            {
              caption: 'view nook net site',
              link: 'https://nooknet.net/'

            }, {
              caption: 'view example test ui',
              link: 'https://codepen.io/ichiknees/pen/vYNeyjz'
            }
          ]
        }
      
    },
    {
      idx: 3,
      title: 'MY OLD WEBSITE',
      date: '2019',
      images: projimg3,
      description: 
        {
          tech: 'HTML, CSS3, Javascript, PHP, React, Photoshop, Jquery, Bootstrap',
          paragraph: 'I like replacing my website design a lot and this was the theme of my last one.',
          links:[
            {
              caption: 'not viewable at the moment',
              link: 'not viewable at the moment'

            }
          ]
        }
      
    }
  ]

  let projList = projects.map((item, i) => {

      let linkList = item.description.links.map((item, i) =>{
          return (
            <button className="btn proj-btn"><a href={`${item.link}`}>{item.caption}</a></button>
          )
      })

      return (
      <div className="project" data-index={`proj-${i}`}>
          <div className="photo">
              <img className="proj-image" src={item.images} alt='project image'/>
          </div>
          <div className="proj-info"> 
            <p className="proj-date">{item.date}</p>
            <h3 className="proj-title"><b>{item.title}</b></h3>
            <p className="proj-tech">{item.description.tech}</p>
            <p className="proj-desc">{item.description.paragraph}</p>
            <p>
              {linkList}
            </p>
          </div>
      </div>
      )
  })

  return (  
    <section className="proj-section">
      <div className="intro-card">
        <img src={pewpew} alt="star" />
        <h1>my projects</h1>
        <p>check 'em out</p>
      </div>
      <div className="projects">
        {projList}
      </div>
      <Footer />
    </section>
  )
}
