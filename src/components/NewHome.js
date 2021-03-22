import React, {useRef} from 'react';
import Hero from '../components/Homepage/Hero';
import About from '../components/Homepage/About';
import Book from '../components/Homepage/Book';
import Projects from '../components/Homepage/Projects';
import CaseStudy from '../components/Homepage/CaseStudy';
import Contact from '../components/Homepage/Contact';

import ScrollTo from '../components/ScrollTo';


function NewHome (props) {
    console.log("props ", props.theme);
    return (
        <div className="main-container">
            <Hero />
            <About />
            <Book />
            <Projects />
            <CaseStudy />
            <Contact />
        </div>
    )
}

export default NewHome;
