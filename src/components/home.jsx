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
                  Hi, I’m Miles Mickelson, and thank you for visiting my website, in it, you will find an outline of my credentials and a brief summary on myself. I’m looking to fulfill a position as a Web Designer, Frontend Developer, or Fullstack Engineer. I love to embrace new challenges, and I am always engaged in goals that test my aptitude and allow me to grow as a developer and as a human being. Please, feel free to contact me with any inquires, thanks again.
                </p>
              </div>
              <h4>Proficiencies</h4>
              <p>
                I am a passionately driven and disciplined professional with an extensive history of success in undertaking demanding roles with adaptability, attentiveness, communication, and receptiveness.
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
          <section>
            <h4>Testimonials</h4>
            <div className='testimonial-wrap'>
              <p className='testimonial'>
                I had the opportunity to work with Miles while he was attending SDCS. There aren't enough good things I can say about how he handled the pressures of the code school. Miles worked diligently while asking questions only after he took every possible route on his own. He also was a big help to other students. He stayed patient and didn't rush through the course, which let him grasp the concepts better. He would be a great fit for any company.
                <br />
                <em className='referencee top'>-Benjamin Sims</em>
                <br />
                <em className='referencee italic'>San Diego Code School</em>
              </p>
              <p className='testimonial'>
                I had the pleasure of working with Miles on a group project. Miles is diligent and works hard to understand concepts. He is passionate about productivity and is a self-starter. I was particularly impressed by Miles' communication skills and ability to work well in a team environment. Any employer would be lucky to have Miles on their team!
                <br />
                <em className='referencee top'>-Madeline Campbell</em>
                <br />
                <em className='referencee italic'>San Diego Zoo Global Hackathon</em>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
