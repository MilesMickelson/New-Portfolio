import React from 'react';

const spyglass = require('../images/spyglass.png');
const breakline2 = require('../images/breakline2.png');
const github = require('../images/github.png');
const medium = require('../images/medium.png');
const linkedin = require('../images/linkedin.png');
const youtube = require('../images/youtube.png');
const pigeon = require('../images/pigeon.png');

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='container-A'>
        <div className='container-B'>
          <div id='resume-wrap' className='red-glow-text'>
            <a
              id='resume-link'
              href='https://drive.google.com/file/d/1K7Dv3O8NaaZhDneLB12f5q-R5VV7sE2K/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='spyglass' src={ spyglass } alt='' />
              View Resume PDF
              <img className='hidden-spyglass' src={ spyglass } alt='' />
            </a>
          </div>
          <div className='center-wrap'>
            <img id='breakline2' src={ breakline2 } alt='' />
          </div>
          <div id='glyph-wrap'>
            <a
              href='https://www.linkedin.com/in/milesmickelson/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='glyph' id='linkedin' src={ linkedin } alt='LinkedIn' />
            </a>
            <a
              href='https://github.com/MilesMickelson'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='glyph' id='github' src={ github } alt='GitHub' />
            </a>
            <a
              href='mailto:milesmickelson87@gmail.com'
              aria-label='send email link'
            >
              <img id='pigeon' src={ pigeon } alt='Email' />
            </a>
            <a
              href='https://medium.com/@milesmickelson87'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='glyph' id='medium' src={ medium } alt='Medium' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCAnL9rFU-4ycu4Lmu08-pkw?view_as=public'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='glyph' id='youtube' src={ youtube } alt='YouTube' />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
