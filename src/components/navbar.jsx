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
              rel='noopener noreferrer'
              onClick={ this.toggleHome }
            >
              <img
                className={ `nav-icon ${this.state.home ? 'isSpinning' : 'notSpinning'}` }
                id='wheel'
                src={ wheel }
                alt='Home'
              />
            </a>
            <a
              title='Projects Page'
              href='#/Projects'
              rel='noopener noreferrer'
              onClick={ this.toggleProjects }
            >
              <img
                className={ `nav-icon ${this.state.projects ? 'inVisible' : 'visible'}` }
                src={ closedChest }
                id='closed-chest'
                alt='Projects'
              />
              <img
                className={ `nav-icon ${this.state.projects ? 'visible' : 'inVisible'}` }
                src={ openChest }
                id='open-chest'
                alt='Projects'
              />
            </a>
            <a
              title='Credentials Page'
              href='#/Credentials'
              rel='noopener noreferrer'
              onClick={ this.toggleCredentials }
            >
              <div id='swivel-wrap'>
                <img
                  className={ `nav-icon ${this.state.credentials ? 'swivel' : 'noSwivel'}` }
                  src={ coin }
                  id='coin'
                  alt='Credentials'
                />
              </div>
            </a>
            <a
              title='About Page'
              href='#/About'
              rel='noopener noreferrer'
              onClick={ this.toggleAbout }
            >
              <img
                className={ `nav-icon ${this.state.about ? 'ghost-pirate' : 'plain-pirate'}` }
                src={ pirate }
                id='pirate'
                alt='About'
              />
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
