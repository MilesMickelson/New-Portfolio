import React from 'react';

const linebreak2 = require('../images/linebreak2.png');
const github = require('../images/github.png');
const medium = require('../images/medium.png');
const linkedin = require('../images/linkedin.png');
const youtube = require('../images/youtube.png');
const raven = require('../images/raven.png');

export default class Footer extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <img id='linebreak2' src={ linebreak2 } alt='' />
          </div>
          <div className='glyph-wrap'>
            <a className='glyph' href='https://www.linkedin.com/in/milesmickelson/' target='_blank' rel='noopener noreferrer' aria-labelledby='linkedin'>
              <img id='linkedin' src={ linkedin } alt='' />
            </a>
            <a className='glyph' href='https://github.com/MilesMickelson' target='_blank' rel='noopener noreferrer' aria-labelledby='github'>
              <img id='github' src={ github } alt='' />
            </a>
            <a className='glyph' href='mailto:milesmickelson87@gmail.com'>
              <img id='raven' src={ raven } alt='' />
            </a>
            <a className='glyph' href='https://medium.com/@milesmickelson87' target='_blank' rel='noopener noreferrer' aria-labelledby='github'>
              <img id='medium' src={ medium } alt='' />
            </a>
            <a className='glyph' href='https://www.youtube.com/channel/UCAnL9rFU-4ycu4Lmu08-pkw?view_as=public' target='_blank' rel='noopener noreferrer' aria-labelledby='github'>
              <img id='youtube' src={ youtube } alt='' />
            </a>
          </div>
          <div className='accreditation'>
          </div>
        </div>
      </div>
    );
  }
}
