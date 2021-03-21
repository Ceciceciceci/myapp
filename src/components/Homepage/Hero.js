import React, {useState} from 'react';

import me1 from '../../images/me1.png';
import me2 from '../../images/me2.png';
import flowerstem from '../../images/flowerstems.png'

export default function Hero() {

    const [inHover, setHover] = useState(false);

    return (
        <section className="hero-section">
            <div>
                {/* HI I"M HERO SECTION */}
                <div className="hero-title">
                    <p className="curly">Hi my name is</p>
                    <h1 className="name">CECILIA<br/>TRAN</h1>
                </div>
                <img className="flowerstem left" src={flowerstem} />    
                <div className="hero-image" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                    {!inHover ?  (
                        <img className='me1' src={me1} />
                    ) : (
                        <img className='me2' src={me2} /> 
                    )}
                </div>
                <img className="flowerstem right" src={flowerstem} />  
            </div>
            <div className="titles">
                <span>Software<br/>Engineer</span><span className="and">&&</span><span>UX<br/>Designer</span>
            </div>
        </section>
    );
}