import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Pricepage from './components/Pricepage';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

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
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header navigation={this.state.navigation}/>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/resume' component={Resume} />
            <Route path='/pricepage' component={Pricepage} />
            <p className="cp">(c) Cecilia Tran 2020</p>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
