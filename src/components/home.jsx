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
                Hi, I’m Miles Mickelson and thank you for visiting my website, in it, you will find an outline of my skills, credentials, some helpful resources, and a little info about me. I’m looking to fulfill a Web Designer, Frontend Developer, or a Fullstack Engineer position, preferably a dynamic role with evolving challenges and opportunities to substantiate my skills. I genuinely value a supervisor’s insight for betterment. Please, feel free to review my work and publications, and contact me with any inquiries, thanks again.
                </p>
              </div>
              <h4>Proficiencies</h4>
              <p>
              I am a passionately driven and disciplined professional with an extensive history of success in undertaking demanding roles. I love to embrace new challenges, and I'm always engaged in opportunities that test my aptitude and allow me to grow as a developer and a human being.
              </p>
            </div>
            <div id='prof-list-wrap'>
              <ul>
                <li className='first-item'>React/JS</li>
                <li>Node</li>
                <li>HTML</li>
                <li>Responsive UI</li>
                <li className='last-item'>Accessibility</li>
              </ul>
              <ul>
                <li className='first-item'>Sass/Less</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Loopback</li>
                <li className='last-item'>Testing</li>
              </ul>
              <ul>
                <li className='first-item'>Git/Agile</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Google Ads</li>
                <li className='last-item'>Google Analytics</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
