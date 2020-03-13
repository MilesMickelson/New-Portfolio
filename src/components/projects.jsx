import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.png');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cherylLeeInfo: false,
      studentTrackerInfo: false,
      nasaViewerInfo: false,
      movieFinderInfo: false,
      weatherAppInfo: false
    };
    this.cherylLeeToggle = this.cherylLeeToggle.bind(this);
    this.studentTrackerToggle = this.studentTrackerToggle.bind(this);
    this.nasaViewerToggle = this.nasaViewerToggle.bind(this);
    this.movieFinderToggle = this.movieFinderToggle.bind(this);
    this.weatherAppToggle = this.weatherAppToggle.bind(this);
  }

  cherylLeeToggle() {
    if (this.state.cherylLeeInfo === true) {
      this.setState({ cherylLeeInfo: false });
    } else {
      this.setState({ cherylLeeInfo: true });
    }
  }

  studentTrackerToggle() {
    if (this.state.studentTrackerInfo === true) {
      this.setState({ studentTrackerInfo: false });
    } else {
      this.setState({ studentTrackerInfo: true });
    }
  }

  nasaViewerToggle() {
    if (this.state.nasaViewerInfo === true) {
      this.setState({ nasaViewerInfo: false });
    } else {
      this.setState({ nasaViewerInfo: true });
    }
  }

  movieFinderToggle() {
    if (this.state.movieFinderInfo === true) {
      this.setState({ movieFinderInfo: false });
    } else {
      this.setState({ movieFinderInfo: true });
    }
  }

  weatherAppToggle() {
    if (this.state.weatherAppInfo === true) {
      this.setState({ weatherAppInfo: false });
    } else {
      this.setState({ weatherAppInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <header className='center-wrap'>
          <h3><img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
            Projects
          <img className='dagger2' src={ dagger } alt='dagger' rel='preload' /></h3>
          </header>
          <section className='center-wrap'>
            <h4>MilesMickelson.com</h4>
            <img className='dark-glow-image' id='audit' src={ audit } alt='audit score' />
            <p>
              Description coming soon, thank you for your interest.
              <a
                href='https://github.com/MilesMickelson/MilesMickelson.github.io'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Miles Mickelsons Portfolio Project Github Repository'
              >
              View repository.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>The Total Machine</h4>
            <p>
              At the 2018 Tealium Hackathon event, my team built a data statistic
              display tool to give Tealium an added service for their clients,
              supplying them a way to achieve coordinated marketing strategies
              through a simple information viewing system. As a result of our
              quality interface, overall presentation, and camaraderie, we finished
              in the top 3 finalists. My responsibilities were designing the user
              interface and presenting our project to a panel judges.
              <a
                href='https://github.com/MilesMickelson/tealium-hackathon'
                rel='noopener noreferrer'
                target='_blank'
                title='The Total Machine Project Github Repository'
              >
              View repository.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>Ranger Radar</h4>
            <p>
              At the 2019 San Diego Zoo Global Hackathon event, my team built a data statistic
              display tool to give Tealium an added service for their clients,
              supplying them a way to achieve coordinated marketing strategies
              through a simple information viewing system. As a result of our
              quality interface, overall presentation, and camaraderie, we finished
              in the top 3 finalists. My responsibilities were designing the user
              interface and presenting our project to a panel judges.
              <a
                href='https://github.com/MilesMickelson/Ranger-Radar'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Ranger Radar Project Github Repository'
              >
              View repository.
              </a>
            </p>
          </section>
          <section>
            <div className='center-wrap'>
            <h4>San Diego Code School Highlights</h4>
            <p>
              I am very proud of how much I learned and gained both professionally and personally going 
              through code school. Listed below are a few of the projects I'm most proud of with a description 
              and link to their Github repository where available, thank you for viewing.
            </p>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  Cheryl Lee's Custom Portfolio Website - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.cherylLeeInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.cherylLeeToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.cherylLeeToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }> 
                <p aria-hidden='true'>
                Frontend SDCS group project showcasing Ms. Lee's achievements,
                affiliations, and credentials with a clean and classy appearance,
                including an automated contact page. Leveraging my soft skills
                and proficiencies in HTML and CSS w/SASS, I played a crucial
                leading role in this project, designing a responsive cross-platform
                website with well-kept code. I was responsible for designing the main
                title, navigation bar, home page, and the footer specifically.
                Being passionate about this project, I followed up with Ms. Lee to
                update and finalize the project, a video demonstration will be coming soon.
                <a
                  href='https://github.com/MilesMickelson/Cheryl-Lee-Review'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Cheryl Lees Portfolio Website Project Github Repository'
                >
                  View repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  SDCS Student Tracker -
                  <button
                    type='submit'
                    className={ `details-button ${this.state.studentTrackerInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.studentTrackerToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.studentTrackerToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                My final SDCS group project, engaged numerous technologies simultaneously;
                built with React/Redux, MongoDB, Loopback, Slack & GitHub API, and workflow; with Git, Scrum,
                and Agile. We successfully integrated the creation of a custom command to in the schools
                slack workspace to input your information and have it saved to a database in order to
                view current progress on a student/admin dashboard. Private school repository.
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  NASA Viewer - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.nasaViewerInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.nasaViewerToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.nasaViewerToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  This is a React web app project that employs the use of one of NASA's public API's -the Astronomy 
                  Picture of the day. There is more to come and in time will have a website to view every single 
                  one seperately with all of their packaged up fun miscellaneous information for all of your 
                  astronomical curiositys.
                <a
                  href='https://github.com/MilesMickelson/NASA-Viewer'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='NASA Viewer project github repository link'
                >
                  View repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  Movie Finder - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.movieFinderInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.movieFinderToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.movieFinderToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  This is a React w/Redux project that implements React Router to view another component on a 
                  second page as displayed above via the "More Info" button. It also uses Axios to make the API 
                  call on the server side to the 'Online Movie Database' website for to use integrated in with 
                  the search bar where you can type in movie names, actors, etc. also if you have already searched 
                  for it recently it will pull it from the data cache to save hitting the api call so frequently.
                <a
                  href='https://github.com/MilesMickelson/REACT200-Movie-Finder'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Movie Finder project github repository link'
                >
                View repository.
                </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li className='last-item'>
                  Weather App - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.weatherAppInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.weatherAppToggle }
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.weatherAppToggle }
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }>                
                <p aria-hidden='true'>
                  React/Redux web app that allows a user to search for current weather in any city by name including 
                  default city buttons and search history.
                <a
                  href='https://github.com/MilesMickelson/REACT200-Weather-App'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Weather App project github repository link'
                >
                View repository.
                </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
