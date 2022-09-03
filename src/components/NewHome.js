import React, {useRef} from 'react';
import Hero from '../components/Homepage/Hero';
import ArtHomepage from './Homepage/ArtHomepage';
import About from '../components/Homepage/About';
import Projects from '../components/Homepage/Projects';
import CaseStudy from '../components/Homepage/CaseStudy';
import Contact from '../components/Homepage/Contact';
import Resume from '../components/Homepage/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function NewHome (props) {
    return (
        <div className="main-container">
            {/* <Hero /> */}
            <ArtHomepage />
        </div>
    )
}

export default NewHome;
