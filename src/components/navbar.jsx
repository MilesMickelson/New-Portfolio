import React from 'react';

// const monocular = require('../images/monocular.png');
// const pigeon = require('../images/pigeon.png');
// <img id='monocular' src={ monocular } alt='' />
// <img id='pigeon' src={ pigeon } alt='' />
// const pirate = require('../images/pirate.png');
// <img id='pirate' src={ pirate } alt='' />

const coin = require('../images/coin.png');
const wheel = require('../images/wheel.png');
const chest = require('../images/chest.png');
const hookpirate = require('../images/hookpirate.png');

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-container-A'>
        <div className='nav-container-B'>
          <div className='nav-wrap'>
            <a className='nav-link' href='#/'>
              <img className='nav-icon' id='wheel' src={ wheel } alt='' />
            </a>
            <a className='nav-link' href='#/Projects'>
              <img className='nav-icon' id='chest' src={ chest } alt='' />
            </a>
            <a className='nav-link' href='#/About'>
              <img className='nav-icon' id='hook-pirate' src={ hookpirate } alt='' />
            </a>
            <a className='nav-link' href='#/Credentials'>
              <img className='nav-icon' id='coin' src={ coin } alt='' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
