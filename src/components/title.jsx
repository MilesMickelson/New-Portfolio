import React from 'react';

const crossedKeys = require('../images/crossedkeys.png');
const breakline1 = require('../images/breakline1.png');

export default class Title extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='row'>
            <div className='col-12' id='title-wrap'>
              <div className='title' id='title-part1'>M</div>
              <img id='crossed-keys' src={ crossedKeys } alt='crossed keys' />
              <div className='title' id='title-part2'>M</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 sub-wrap'>
              <div id='sub-title'>Fullstack&nbsp;Developer</div>
              <img id='breakline1' src={ breakline1 } alt='break line' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
