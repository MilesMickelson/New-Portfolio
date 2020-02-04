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
import Contact from './components/contact';
import Footer from './components/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        {/* <Router>
          <Route exact path='/' component={ Home } />
          <Route path='/contact' component={ Contact } />
        </Router>
        <Footer /> */}
      </div>
    );
  }
}
