import React from 'react';

const coin = require('../images/coin.png');
const wheel = require('../images/wheel.png');
const chest = require('../images/chest.png');
const pirate = require('../images/pirate.png');

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='nav-wrap'>
            <a href='#/'>
              <img className='nav-icon' id='wheel' src={ wheel } alt='home' rel='preload' />
            </a>
            <a href='#/Projects'>
              <img className='nav-icon' id='chest' src={ chest } alt='projects' rel='preload' />
            </a>
            <a href='#/Credentials'>
              <img className='nav-icon' id='coin' src={ coin } alt='credentials' rel='preload' />
            </a>
            <a href='#/About'>
              <img className='nav-icon' id='pirate' src={ pirate } alt='about' rel='preload' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
