import React from 'react';

const coin = require('../images/coin.png');
const wheel = require('../images/wheel.png');
const openChest = require('../images/open-chest.png');
const closedChest = require('../images/closed-chest.png');
const pirate = require('../images/pirate.png');

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      projects: false,
      credentials: false,
      about: false,
    };
    this.toggleHome = this.toggleHome.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
    this.toggleCredentials = this.toggleCredentials.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleHome() {
    this.setState({
      home: true,
      projects: false,
      credentials: false,
      about: false,
    });
  }

  toggleProjects() {
    this.setState({
      home: false,
      projects: true,
      credentials: false,
      about: false,
    });
  }

  toggleCredentials() {
    this.setState({
      home: false,
      projects: false,
      credentials: true,
      about: false,
    });
  }

  toggleAbout() {
    this.setState({
      home: false,
      projects: false,
      credentials: false,
      about: true,
    });
  }

  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <nav id='nav-wrap' aria-label='primary'>
            <a 
              title='Home Page'
              href='#/'
              aria-current='page'
              onClick={ this.toggleHome }
            >
            <img
              className={ `nav-icon ${this.state.home ? 'isSpinning' : 'notSpinning'}` }
              id='wheel'
              src={ wheel }
              alt='ship wheel'
              rel='preload'
            />
            </a>
            <a
              onClick={ this.toggleProjects }
              title='Projects Page'
              href='#/Projects'
              aria-current='page'
              >
              <img
                className={ `nav-icon ${this.state.projects ? 'invisible' : 'visible'}` }
                src={ closedChest }
                id='closedChest'
                alt='closed chest'
                rel='preload'
              />
              <img
                className={ `nav-icon ${this.state.projects ? 'visible' : 'invisible'}` }
                src={ openChest }
                id='openChest'
                alt='open chest'
                rel='preload'
              />
            </a>
            <a
              onClick={ this.toggleCredentials }
              title='Credentials Page'
              href='#/Credentials'
              aria-current='page'
            >
              <div id='swivel-wrap'>
              <img
                className={ `nav-icon ${this.state.credentials ? 'swivel' : 'noSwivel'}` } 
                src={ coin }
                id='coin'
                alt='pirate coin'
                rel='preload'
              />
              </div>
            </a>
            <a
              onClick={ this.toggleAbout }
              title='About Page'
              href='#/About'
              aria-current='page'
            >
              <img
                className={ `nav-icon ${this.state.about ? 'ghost-pirate' : 'plain-pirate'}` }
                src={ pirate }
                id='pirate'
                alt='pirate skull'
                rel='preload'
              />
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
