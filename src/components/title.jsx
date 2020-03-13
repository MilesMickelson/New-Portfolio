import React from 'react';

const crossedKeys = require('../images/crossedkeys.png');
const breakline1 = require('../images/breakline1.png');

export default class Title extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <header id='maintitle-wrap'>
            <h1 className='dark-glow-image' id='title-part1' aria-label='main title' tabIndex='-1'>M</h1>
            <img className='dark-glow-image' id='crossed-keys' src={ crossedKeys } alt='crossed keys' />
            <h1 className='dark-glow-image' id='title-part2' aria-label='main title' tabIndex='-1'>M</h1>
          </header>
          <header id='subtitle-wrap'>
            <h2 id='sub-title' aria-label='sub title' tabIndex='-1'>Fullstack&nbsp;Developer</h2>
            <img id='breakline1' src={ breakline1 } alt='break line' />
          </header>
        </div>
      </div>
    );
  }
}
