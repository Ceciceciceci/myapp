import React, {Component} from 'react';
import About from './About';
import Skills from './Skills';

class Home extends Component {
  state = {
    projects : [
      { projName: 'NookNet', year: '2020', links:[ {name:'NookNet site', linkout:'https://nooknet.net/'} ], description: 'An Animal Crossing guide for new players and old to come here to save collections, make tunes and more. HTML, CSS3, JS, Jquery, CSS Grids, PHP, Symphony, Composer' },
      { projName: 'Classic Vacations', year: '2019-cont.', links:[ { name: 'Style Guide site', linkout:'http://classicvacationsdesign.com/' }, {name: 'Classic Vacations site', linkout: 'https://www.classicvacations.com/'} ], description: 'Created a style guide with the UX designer to help the rest of the team keep a uniformity for the new website look. Used HTML, CSS3, JS, PHP'}
    ]
  }
  render() {
    return (
        <div className="home">
          <section className = "main-container">
            <div className="inner-box">
                <div className="title">
                  <h3>Hi, my name's</h3>
                  <span className="name">
                    <div className="f-name" data-shadow='Cecilia'>Cecilia</div>
                    <div className="l-name" data-shadow='Tran'>Tran</div>
                  </span>
                </div>
                <div className="subtitle"><span className="stylize">Full-stack Dev</span><span className="stylize"> UI / UX Designer</span></div>
            </div>
            <svg width="914" height="914" viewBox="0 0 914 914" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M457 457C457 520.71 903.474 581.397 880.114 636.574C855.574 694.539 501.703 414.08 457 457C416.258 496.117 686.148 860.13 633.227 882.172C578.96 904.775 519.434 457 457 457C394.566 457 335.041 904.775 280.773 882.172C227.852 860.13 497.742 496.117 457 457C412.297 414.08 58.4257 694.539 33.8857 636.574C10.5262 581.397 457 520.71 457 457C457 393.29 10.5262 332.603 33.8857 277.426C58.4257 219.461 412.297 499.92 457 457C497.742 417.883 227.852 53.8698 280.773 31.8278C335.041 9.22515 394.566 457 457 457C519.434 457 578.96 9.22515 633.227 31.8278C686.148 53.8698 416.258 417.883 457 457C501.703 499.92 855.574 219.461 880.114 277.426C903.474 332.603 457 393.29 457 457Z" fill="#E6DCC5"/>
                  <path d="M457 457C440.511 518.54 856.064 692.715 819.22 739.965C780.514 789.604 511.288 427.113 457 457C407.522 484.239 574.002 905.702 517.179 913.296C458.911 921.083 517.307 473.159 457 457C396.693 440.841 223.303 857.952 176.735 822.074C131.322 787.086 486.23 505.328 457 457C424.929 403.973 10.5271 583.287 1.82574 520.945C-6.457 461.603 440.511 518.54 457 457C473.489 395.461 57.9358 221.285 94.7801 174.035C133.486 124.396 402.712 486.887 457 457C506.478 429.761 339.998 8.29825 396.821 0.704335C455.089 -7.08274 396.693 440.841 457 457C517.307 473.159 690.697 56.0481 737.265 91.926C782.678 126.914 427.77 408.672 457 457C489.072 510.027 903.473 330.713 912.174 393.055C920.457 452.397 473.489 395.461 457 457Z" fill="#E6DCC5"/>
                  <path d="M457 457C425.145 512.175 781.459 787.968 733.641 824.073C683.406 862.002 517.174 442.182 457 457C402.158 470.505 453.883 920.695 397.031 913.323C338.733 905.764 511.07 488.217 457 457C402.93 425.783 127.493 783.805 91.797 737.096C56.987 691.547 472.725 511.247 457 457C439.746 397.479 -6.94512 463.428 0.785214 400.959C8.14367 341.494 425.145 512.175 457 457C488.855 401.825 132.541 126.032 180.359 89.9271C230.594 51.9978 396.826 471.818 457 457C511.842 443.495 460.117 -6.69497 516.969 0.676704C575.267 8.23588 402.93 425.783 457 457C511.07 488.217 786.507 130.195 822.203 176.903C857.013 222.453 441.275 402.753 457 457C474.254 516.521 920.945 450.572 913.215 513.041C905.856 572.506 488.855 401.825 457 457Z" fill="#E6DCC5"/>
            </svg>
          </section>
          {/* <div className="divider"></div> */}
          <About />
          <Skills />
        </div>
    );
  }
}

export default Home;
