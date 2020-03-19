import React from 'react';

const dagger = require('../images/dagger.png');
const profile = require('../images/profile.jpg');

export default class Home extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3>
            <img className='dagger1' src={ dagger } alt='' />
            Home
            <img className='dagger2' src={ dagger } alt='' />
          </h3>
          <section>
            <div className='center-wrap'>
              <h4>Introduction</h4>
              <div className='clearfix-wrap'>
                <img 
                  className='dark-glow-image'
                  id='profile'
                  src={ profile }
                  alt='Miles Mickelson portrait'
                />
                <p id='intro-info'>
                  Hi, I’m Miles Mickelson, and thank you for visiting my website dedicated to illustrating my skills, credentials, and shedding some light on who I am. I am currently looking to fulfill a fullstack junior developer position, preferably with various dynamic roles, on an ambitious team with consistent, high-quality output and great camaraderie. I highly value learning from a senior engineer’s counsel and gaining insight for growth and direction. Please feel free to review my accounts displayed in the footer, and contact me at any time.
                </p>
              </div>
              <h4>Proficiencies</h4>
              <p>
                I love to accept and embrace new challenges, so my potential is not limited to the languages and technologies listed below. I look forward to opportunities to test my knowledge and allow me to showcase my skills and ability to grow as a developer.
              </p>
            </div>
            <div id='prof-list-wrap'>
              <ul>
                <li className='first-item'>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li className='last-item'>Sass+Less</li>
              </ul>
              <ul>
                <li className='first-item'>MongoDB</li>
                <li>MySQL</li>
                <li>Loopback</li>
                <li className='last-item'>Mocha+Chai</li>
              </ul>
              <ul>
                <li className='first-item'>Git Workflow</li>
                <li>Heroku</li>
                <li>CircleCI</li>
                <li className='last-item'>Scrum+Agile</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
