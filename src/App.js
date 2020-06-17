import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {
      navigation:[
      {
        id: 1,
        name: 'header',
        links: {
          projects: '#projects',
          art: '/art',
          about: '/about',
          resume: '/resume',
          contact: '/contact',
        }
      },
      {
        id:2,
        name: 'art',
        links: {
          illustration: '/illustration',
          grapDesign: '/graphicdesign',
          shop: 'https://ichee.bigcartel.com/',
          contact: '/contact',
        }
      }
    ],
    projects : [
      { projName: 'NookNet', year: '2020', links:[ {name:'NookNet site', linkout:'https://nooknet.net/'} ], description: 'An Animal Crossing guide for new players and old to come here to save collections, make tunes and more. HTML, CSS3, JS, Jquery, CSS Grids, PHP, Symphony, Composer' },
      { projName: 'Classic Vacations', year: '2019-cont.', links:[ { name: 'Style Guide site', linkout:'http://classicvacationsdesign.com/' }, {name: 'Classic Vacations site', linkout: 'https://www.classicvacations.com/'} ], description: 'Created a style guide with the UX designer to help the rest of the team keep a uniformity for the new website look. Used HTML, CSS3, JS, PHP'}
    ]
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header navigation={this.state.navigation}/>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
