import React from 'react';

const crossedKeys = require('../images/crossedkeys2.png');
const linebreak = require('../images/linebreak.png');


export default class Title extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='row'>
            <div className='col-12' id='title-wrap'>
              <div id='main-title1'>M</div>
              <img id='crossed-keys' src={ crossedKeys } alt='' />
              <div id='main-title2'>M</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12' id='subtitle-wrap'>
              <div id='sub-title'>Fullstack Developer</div>
              <img className='linebreak' src={ linebreak } alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
