import React, {useRef} from 'react';
import Hero from '../components/Homepage/Hero';
import About from '../components/Homepage/About';

function NewHome (props) {
    console.log("props ", props);
    return (
        <div>
            <Hero />
            <About />
        </div>
    )
}

export default NewHome;
