import React, {useState} from 'react';
import flowerstem from '../../images/flowerstems.png'
import multistar from '../../images/svgs/multistar.svg'

export default function Hero() {

    const [inHover, setHover] = useState(false);

    return (
        <section className="hero-section">
            <div>
                {/* HI I"M HERO SECTION */}
                <img className="hero-star" src={multistar} />    
                <div className="hero-title">
                    <p className="hero-sub">oh my gosh!</p>
                    <p className="hero-sub">welcome!</p>
                    <p className="hero-sub">my name is</p>
                    <h1 className="name">CECILIA</h1>
                </div>
                <div className="flowerstems">
                    <img className="flowerstem left" src={flowerstem} />    
                    <img className="flowerstem right" src={flowerstem} /> 
                </div> 
            </div>
        </section>
    );
}