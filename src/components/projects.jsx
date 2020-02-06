import React from 'react';

// ➢
const musket = require('../images/musket.png');
const dagger = require('../images/dagger1.png');

export default class Projects extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <div className='page-title'>Projects</div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='' />
              SDCS Student Tracker
              <img className='dagger2' src={ dagger } alt='' />
            </div>
            <div className='paragraph'>
              A complex advanced project that gave me perspective on employing 
              many tools simultaneously with React/Redux, MongoDB, Loopback, and 
              workflow with Git, Scrum, and Agile. We successfully integrated a 
              workspace slackbot with customized slash commands allowing students 
              to submit or update their information and view their statistics on 
              the website. Individually tasked with creating a slash command to 
              input your information in the slack workspace, my responsibility 
              in the team developed necessitating the assurance of managing our 
              highest priority task, communicating, scheduling, and assisting 
              in Git, Scrum, and Agile workflow.
            </div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='' />
              Cheryl Lee's Custom Portfolio Site
              <img className='dagger2' src={ dagger } alt='' />
            </div>
            <div className='paragraph'>
              Forthright website project showcasing Ms. Lee's achievements, 
              affiliations, and credentials with a clean and classy appearance, 
              including an automated contact page. Leveraging my soft skills 
              and proficiencies in HTML and CSS w/SASS, I played a crucial 
              leading role in this project, designing a responsive cross-platform 
              website with well-kept code. I was responsible for designing the main 
              title, navigation bar, the home page, and the footer specifically. 
              Being passionate about this project, I followed up with Ms. Lee to 
              update and finalize the project to completion, which can be viewed 
              here at www.CherylRLee.com.
            </div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='' />
              The Total Machine
              <img className='dagger2' src={ dagger } alt='' />
            </div>
            <div className='paragraph'>
              At the 2018 Tealium Hackathon event, my team built a data statistic 
              display tool to give Tealium an added service for their clients, 
              supplying them a way to achieve coordinated marketing strategies 
              through a simple information viewing system. As a result of our 
              quality interface, overall presentation, and camaraderie, we finished 
              in the top 3 finalists. My responsibilities were designing the user 
              interface and presenting our project to the judges.
            </div>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='' />
              Deploy All The Things
              <img className='dagger2' src={ dagger } alt='' />
            </div>
            <div className='paragraph'>
              Deployed all previously completed projects on Heroku, followed by a 
              CircleCI edition. Having used additional recommended libraries and tools, 
              I encountered a multitude of dependency versioning issues. After 
              troubleshooting those issues, I acquired in-depth knowledge and 
              comfortability on the command line for installing and uninstalling where 
              I needed to and for the right reasons.
            </div>
          </div>
        </div>
      </div>
    );
  }
}