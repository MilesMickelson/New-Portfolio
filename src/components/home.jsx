import React from 'react';

const dagger = require('../images/dagger.png');

export default class Home extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <div className='page-title'>Home</div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Introduction
              <img className='dagger2' src={ dagger } alt='dagger' />
            </div>
            <div className='paragraph'>
              Hi, I’m Miles Mickelson; thank you for visiting my website dedicated 
              to illustrating my proficiencies and shedding some light on who I am. 
              Navigate using the menu icons above and please feel free to get in 
              touch with me or review my credentials using the icons in the footer anytime.
            </div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Seeking
              <img className='dagger2' src={ dagger } alt='dagger' />
            </div>
            <div className='paragraph'>
              Looking to fulfill a fullstack junior developer position, 
              preferably with various dynamic roles on an ambitious team with 
              consistent, high-quality output and great camaraderie. Highly value 
              learning from a senior engineer’s counsel and insight for growth 
              and direction.
            </div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Proficiencies
              <img className='dagger2' src={ dagger } alt='dagger' />
            </div>
            <div className='paragraph'>
              I love to accept and embrace new challenges; so I do not feel limited here 
              and look forward to becoming a highly-skilled and well-rounded 
              knowledgeable developer.
            </div>
          </div>
          <div className='list-wrap'>
            <ul className='skills-list'>
              <li className='list-item'>Javascript</li>
              <li className='list-item'>React</li>
              <li className='list-item'>Redux</li>
              <li className='last-list-item'>Sass+Less</li>
            </ul>
            <ul className='skills-list'>
              <li className='list-item'>MongoDB</li>
              <li className='list-item'>MySQL</li>
              <li className='list-item'>Loopback</li>
              <li className='last-list-item'>Mocha+Chai</li>
            </ul>
            <ul className='skills-list'>
              <li className='list-item'>Git Workflow</li>
              <li className='list-item'>Heroku</li>
              <li className='list-item'>CircleCI</li>
              <li className='last-list-item'>Scrum+Agile</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
