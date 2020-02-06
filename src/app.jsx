import React from 'react';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

// import Sticky from 'react-sticky-el';
//         <Sticky style={ { 'z-index': '9999' } }>
//           <NavBar />
//         </Sticky>

import Title from './components/title';
import NavBar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Credentials from './components/credentials';
import Footer from './components/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <NavBar id='NavBar' />
        <Router>
          <Route id='Home' exact path='/' component={ Home } />
          <Route id='Projects' exact path='/Projects' component={ Projects } />
          <Route exact path='/About' component={ About } />
          <Route exact path='/Credentials' component={ Credentials } />
        </Router>
        <Footer />
      </div>
    );
  }
}
