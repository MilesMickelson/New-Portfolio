import React from 'react';

const coin = require('../images/coin.png');
const wheel = require('../images/wheel.png');
const chest = require('../images/chest.png');
const pirate = require('../images/pirate.png');
const compass = require('../images/compass.png');

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='nav-wrap'>
            <a className='nav-link' href='#/'>
              <img className='nav-icon' id='wheel' src={ wheel } alt='home' />
            </a>
            <a className='nav-link' href='#/Projects'>
              <img className='nav-icon' id='chest' src={ chest } alt='projects' />
            </a>
            <a className='nav-link' href='#/Credentials'>
              <img className='nav-icon' id='coin' src={ coin } alt='credentials' />
            </a>
            <a className='nav-link' href='#/About'>
              <img className='nav-icon' id='pirate' src={ pirate } alt='about' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
