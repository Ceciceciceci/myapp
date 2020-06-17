import React, { Component } from 'react';

class Skills extends Component{
    render(){
        return (
            <section className="skills-container">

                <h3 className="skill-title">
                    <svg width="100%" height="auto" viewBox="0 0 463 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H450L425.212 70.5L450 141H0L24.7881 70.5L0 0Z" fill="#DF4C38"/>
                        <path d="M9 5H463L437.992 77.5L463 150H9L34.0085 77.5L9 5Z" fill="#86A488"/>
                        <path d="M8 5H455L430.377 74L455 143H8L32.6229 74L8 5Z" fill="#4E2B0D"/>
                    </svg>
                    <div className="text">
                        <p>TOOLS</p> 
                        <p>of the</p> 
                        <p>TRADE</p>
                    </div>
                </h3>
                <div className="desc">
                    <div className="lang">
                        <p>LANGUAGES</p>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3 / Bootstrap / Grids</li>
                            <li>Javascript / ES6 / JQuery</li>
                            <li>ReactJS / NodeJS</li>
                            <li>PHP / Drupal</li>
                            <li>MySQL</li>
                            <li>Python</li>
                            <li>Java (least)</li>
                        </ul>
                        <svg  className="scissors" width="379" height="379" viewBox="0 0 379 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M151.5 180.5L0.5 105.5H8L141 148L151.5 180.5Z" fill="#573F27"/>
                            <path d="M102.5 8V0.5L183.5 161.5L175.5 187L244.5 317C244.5 317 248.956 347.704 240.5 359.5C231.391 372.205 220.63 377.686 205 378C185.982 378.382 176.5 369 167.5 359.5C158.5 350 151.5 323 156.5 314.5C158.939 310.353 168.514 281.122 171.406 261.5C174.101 243.213 171 217.5 171 217.5L102.5 8Z" fill="#573F27"/>
                            <path d="M316 241.5L185.5 177L192 164C192 164 217.369 170.488 234 171.5C249.806 172.462 258.978 172.636 274.5 169.5C288.907 166.589 295.514 159.488 310 157C321 155.111 331.145 151.685 345 157C358.308 162.106 366.684 169.987 372.5 183C378.157 195.657 380.498 203.569 375.5 216.5C370.858 228.511 363.523 233.752 352 239.5C338.721 246.125 316 241.5 316 241.5Z" fill="#573F27"/>
                            {/* <ellipse cx="329.247" cy="198.323" rx="30.0549" ry="34.9932" transform="rotate(-68.7952 329.247 198.323)" fill="#86A488"/>
                            <ellipse cx="200.495" cy="330.677" rx="30.0549" ry="34.9932" transform="rotate(-25.1944 200.495 330.677)" fill="#86A488"/> */}
                        </svg>

                    </div>
                    <div className="tools">
                        <p>TOOLS</p>
                        <ul>
                            <li>VS Code / Atom</li>
                            <li>Git / JIRA / Confluence</li>
                            <li>AWS S3</li>
                            <li>Microsoft Word / Excel / Powerpoint</li>
                            <li>Adobe Photoshop / Illustrator</li>
                            <li>Sketch / Maya</li>
                        </ul>
                        <svg  className="scissors" width="379" height="379" viewBox="0 0 379 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M151.5 180.5L0.5 105.5H8L141 148L151.5 180.5Z" fill="#573F27"/>
                            <path d="M102.5 8V0.5L183.5 161.5L175.5 187L244.5 317C244.5 317 248.956 347.704 240.5 359.5C231.391 372.205 220.63 377.686 205 378C185.982 378.382 176.5 369 167.5 359.5C158.5 350 151.5 323 156.5 314.5C158.939 310.353 168.514 281.122 171.406 261.5C174.101 243.213 171 217.5 171 217.5L102.5 8Z" fill="#573F27"/>
                            <path d="M316 241.5L185.5 177L192 164C192 164 217.369 170.488 234 171.5C249.806 172.462 258.978 172.636 274.5 169.5C288.907 166.589 295.514 159.488 310 157C321 155.111 331.145 151.685 345 157C358.308 162.106 366.684 169.987 372.5 183C378.157 195.657 380.498 203.569 375.5 216.5C370.858 228.511 363.523 233.752 352 239.5C338.721 246.125 316 241.5 316 241.5Z" fill="#573F27"/>
                            {/* <ellipse cx="329.247" cy="198.323" rx="30.0549" ry="34.9932" transform="rotate(-68.7952 329.247 198.323)" fill="#86A488"/>
                            <ellipse cx="200.495" cy="330.677" rx="30.0549" ry="34.9932" transform="rotate(-25.1944 200.495 330.677)" fill="#86A488"/> */}
                        </svg>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;