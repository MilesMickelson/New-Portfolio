import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.png');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cherylLeeInfo: false,
      studentTrackerInfo: false,
    };
    this.experienceToggle1 = this.experienceToggle1.bind(this);
    this.experienceToggle2 = this.experienceToggle2.bind(this);
  }

  experienceToggle1() {
    if (this.state.cherylLeeInfo === true) {
      this.setState({ cherylLeeInfo: false });
    } else {
      this.setState({ cherylLeeInfo: true });
    }
  }

  experienceToggle2() {
    if (this.state.studentTrackerInfo === true) {
      this.setState({ studentTrackerInfo: false });
    } else {
      this.setState({ studentTrackerInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <header className='center-wrap'>
            <h3>Projects</h3>
          </header>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              MilesMickelson.com
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <img id='audit' src={ audit } alt='audit score' />
            <p>
              Description coming soon, thank you for your interest.&nbsp;
              <a
                href='https://github.com/MilesMickelson/MilesMickelson.github.io'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Miles Mickelsons Portfolio Project Github Repository'
              >
              ~View repository here.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              The Total Machine
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              At the 2018 Tealium Hackathon event, my team built a data statistic&nbsp;
              display tool to give Tealium an added service for their clients,&nbsp;
              supplying them a way to achieve coordinated marketing strategies&nbsp;
              through a simple information viewing system. As a result of our&nbsp;
              quality interface, overall presentation, and camaraderie, we finished&nbsp;
              in the top 3 finalists. My responsibilities were designing the user&nbsp;
              interface and presenting our project to a panel judges.&nbsp;
              <a
                href='https://github.com/MilesMickelson/tealium-hackathon'
                rel='noopener noreferrer'
                target='_blank'
                title='The Total Machine Project Github Repository'
              >
              ~View repository here.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Ranger Radar
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              At the 2019 San Diego Zoo Global Hackathon event, my team built a data statistic&nbsp;
              display tool to give Tealium an added service for their clients,&nbsp;
              supplying them a way to achieve coordinated marketing strategies&nbsp;
              through a simple information viewing system. As a result of our&nbsp;
              quality interface, overall presentation, and camaraderie, we finished&nbsp;
              in the top 3 finalists. My responsibilities were designing the user&nbsp;
              interface and presenting our project to a panel judges.&nbsp;
              <a
                href='https://github.com/MilesMickelson/Ranger-Radar'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Ranger Radar Project Github Repository'
              >
              ~View repository here.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              San Diego Code School Highlights
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              I am very proud of how much I learned going through code school; listed 
              below are a few of the ones I'm most proud of with a link to their Github repository.
            </p>
            <div className='project-list-wrap'>
              <ul>
                <li>
                  <a
                    href='https://github.com/MilesMickelson/NASA-Viewer'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='NASA Viewer project github repository link'
                  >
                  NASA Viewer
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href='https://github.com/MilesMickelson/REACT200-Movie-Finder'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='React 200 Movie Finder project github repository link'
                  >
                  Movie Finder
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href='https://github.com/MilesMickelson/REACT200-Weather-App'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='React 200 Weather App project github repository link'
                  >
                  Weather App
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Cheryl Lee's Custom Portfolio Website 
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
              <p>
                Frontend SDCS group project showcasing Ms. Lee's achievements,&nbsp;
                affiliations, and credentials with a clean and classy appearance,&nbsp;
                including an automated contact page. Leveraging my soft skills&nbsp;
                and proficiencies in HTML and CSS w/SASS, I played a crucial&nbsp;
                leading role in this project, designing a responsive cross-platform&nbsp;
                website with well-kept code. I was responsible for designing the main&nbsp;
                title, navigation bar, home page, and the footer specifically.&nbsp;
                Being passionate about this project, I followed up with Ms. Lee to&nbsp;
                update and finalize the project, a video demonstration will be coming soon.&nbsp;
                <a
                  href='https://github.com/MilesMickelson/Cheryl-Lee-Review'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Cheryl Lees Portfolio Website Project Github Repository'
                >
                ~View repository here.
                </a>
              </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              SDCS Student Tracker
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Backend SDCS group project that gave me perspective on employing&nbsp;
              many tools simultaneously with React/Redux, MongoDB, Loopback, and&nbsp;
              workflow with Git, Scrum, and Agile. We successfully integrated a&nbsp;
              workspace slackbot with customized slash commands allowing students&nbsp;
              to submit or update their information and view their statistics on&nbsp;
              the website. Individually tasked with creating a slash command to&nbsp;
              input your information in the slack workspace, my responsibility&nbsp;
              in the team developed necessitating the assurance of managing our&nbsp;
              highest priority task, communicating, scheduling, and assisting&nbsp;
              in Git, Scrum, and Agile workflow. ~Private School Repository.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
