import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <div className='page-title'>Home</div>
            <div className='paragraph'>
              Hi, I’m Miles Mickelson; thank you for visiting my website dedicated 
              to illustrating my proficiencies and shedding some light on who I am. 
              Please feel free to navigate using the menu icons on your left; and you 
              can get in touch with me or review my credentials and achievements across 
              platforms in the footer at anytime.
            </div>
            <div className='paragraph'>
              I am looking to fulfill a fullstack junior developer position, 
              preferably with various dynamic roles on an ambitious team with 
              consistent, high-quality output and great camaraderie. Highly value 
              learning from a senior engineer’s counsel and insight for growth 
              and direction.
            </div>
            <div className='paragraph'>
              My skills and technology proficiencies are listed below. However, I 
              love to accept and embrace new challenges; so I do not feel limited 
              here and look forward to becoming a highly-skilled, well-rounded, 
              and knowledgeable developer.
            </div>
          </div>
          <div className='row skills-wrap'>
            <div className='col-skill'>
              <ul className='skills'>
                <li className='skills-item'>Javascript</li>
                <li className='skills-item'>React</li>
                <li className='skills-item'>Redux</li>
                <li className='last-skills-item'>Sass-Less</li>
              </ul>
            </div>
            <div className='col-skill'>
              <ul className='skills'>
                <li className='skills-item'>MongoDB</li>
                <li className='skills-item'>MySQL</li>
                <li className='skills-item'>Loopback</li>
                <li className='last-skills-item'>Mocha-Chai</li>
              </ul>
            </div>
            <div className='col-skill'>
              <ul className='skills'>
                <li className='skills-item'>Git Workflow</li>
                <li className='skills-item'>Heroku</li>
                <li className='skills-item'>CircleCI</li>
                <li className='last-skills-item'>Scrum-Agile</li>
              </ul>
            </div>
          </div>
          <div className='center-wrap'>
            <div className='paragraph'>
              My skills and technology proficiencies are listed below. However, I 
              love to accept and embrace new challenges; so I do not feel limited 
              here and look forward to becoming a highly-skilled, well-rounded, 
              and knowledgeable developer.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
