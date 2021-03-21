import React, {useRef} from 'react';
import Hero from '../components/Homepage/Hero';
import About from '../components/Homepage/About';
import Book from '../components/Homepage/Book';
import Projects from '../components/Homepage/Projects';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Homepage/Contact';


function NewHome (props) {
    console.log("props ", props);
    return (
        <div>
            <Hero />
            <About />
            <Book />
            <Contact />
        </div>
    )
}

export default NewHome;
