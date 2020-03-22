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
                  Hi, I’m Miles Mickelson, thank you for visiting my website dedicated for illustrating my skills, credentials, and shedding some light on who I am. I’m looking to fulfill a front-end or full-stack junior developer position, preferably with a dynamic role on an ambitious team, with high-quality output, and great camaraderie. I genuinely value a senior engineer’s insight for betterment. Please, feel free to review my accounts displayed in the footer, and contact me any time.
                </p>
              </div>
              <h4>Proficiencies</h4>
              <p>
                I love to embrace new challenges, so I'm always looking forward to opportunities that test my aptitude and allow me to grow as a developer. Therefore my potential is not limited to the languages and technologies listed here.
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
