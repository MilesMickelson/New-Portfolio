import React from 'react';

const crossedKeys = require('../images/crossedkeys.png');
const breakline1 = require('../images/breakline1.png');

export default class Title extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <header className='container-B'>
          <div id='maintitle-wrap'>
            <h1 className='dark-glow-image' id='title-part1' aria-label='Miles'>M</h1>
            <img
              className='dark-glow-image'
              id='crossed-keys'
              src={ crossedKeys }
              alt='crossed keys brand logo'
            />
            <h1 className='dark-glow-image' id='title-part2' aria-label='Mickelson'>M</h1>
          </div>
          <div id='subtitle-wrap'>
            <h2 id='sub-title'>Fullstack&nbsp;Developer</h2>
            <img id='breakline1' src={ breakline1 } alt='' />
          </div>
        </header>
        <div className='container-B'>
          <div id='navlabels-wrap'>
            <em id='home'>Home</em>
            <em id='projects'>Projects</em>
            <em id='credentials'>Credentials</em>
            <em id='about'>About</em>
          </div>
        </div>
      </div>
    );
  }
}
