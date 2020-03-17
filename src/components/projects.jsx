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
          <h3 aria-label='page title projects'>
            <img className='dagger1' src={ dagger } alt='' rel='preload' />
            Projects
            <img className='dagger2' src={ dagger } alt='' rel='preload' />
          </h3>
          <section className='center-wrap'>
            <h4>MilesMickelson.com</h4>
            <img className='dark-glow-image' id='audit' src={ audit } alt='audit score' />
            <p>
              Thank you for your interest in myself and this website, I took enjoyment in the developing process and acquired a myriad of knowledge and tools along the way. My mission for this project was to complete a website built with the result being one of high performance, optimization, proper accessibility, and include an entertaining theme. Built with Node, React, Parcel, and Sass, and a customized ES-Lint AirBNB configuration for clean and purposeful code. The website is 100% responsive across all devices and screen sizes without a single media query; while also maintaining maximum browser compatibility and a brand logo for every space. Implementing the lighthouse tool to audit and review its feedback, I was able to maximize performance, accessibility, best practices, and search engine optimization-final audit score presented with details outlined below. Google analytics informative data collection will support continuous improvement
              <a
                href='https://github.com/MilesMickelson/MilesMickelson.github.io'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Miles Mickelsons Portfolio Project Github Repository'
                aria-label='portfolio project repository link'
              >
              -view repository.
              </a>
              Performance - All files and images are compressed and served up in a gzip, brotli, or select image format to decrease loading time and total memory used.  Deferring all non-essential elements to the first home page load, waiting until the initial presentation is complete, and pre-renders the rest of the pages and images before you visit them maximizing navigation speed.<br/>
              Accessibility - Utilizing correct aria attributes with valid values in conjunction with appropriate HTML structuring and landmark regions, the site is 100% accessible. It can be accurately navigated with a keyboard and voice assistant technology, giving informative feedback quickly for essential elements only, and when necessary, describes more for visual components.<br />
              Best Practices - Employs HTTPS and HTML attributes to avoid security vulnerabilities. All images displayed with correct aspect ratios and no browser errors logged into the console.<br />
              Search Engine Optimization - Fulfills necessary elements with proper attributes and descriptive text to increase search optimization rating with link targets and text sized appropriately.<br />
            </p>
          </section>
          <section className='center-wrap'>
            <h4>The Total Machine</h4>
            <p>
              At the 2018 Tealium Hackathon event, my team built a data statistic display tool 
              to give Tealium an added service for their clients, supplying them a way to achieve 
              coordinated marketing strategies through a simple information viewing system. As a 
              result of our quality interface, overall presentation, and camaraderie, we finished in the top 3 finalists. My responsibilities were designing the user interface and presenting our project to a panel judges
              <a
                href='https://github.com/MilesMickelson/tealium-hackathon'
                rel='noopener noreferrer'
                target='_blank'
                title='The Total Machine Project Github Repository'
                aria-label='total machine project repository link'
              >
              -view repository.
              </a>
            </p>
          </section>
          <section className='center-wrap'>
            <h4>Ranger Radar</h4>
            <p>
              At the 2019 San Diego Global Zoo Hackathon event, we built an application to provide African Rangers a way to track live animal movements and human encroachment. Providing a solution for this is a tough challenge to overcome; the problem is getting the data in real-time and keeping it secure. Doing the best with what was available, we integrated multiple API's to display the objective of our application and provide ideas for future technology implementations such as motion sensors and thumbprinting/facial+shape recognition technology. I created the interface of the application and assisted in; our search of resources, planning with the team, and accepted the role as primary presentee to the panel of judges
              <a
                href='https://github.com/MilesMickelson/Ranger-Radar'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Ranger Radar Project Github Repository'
                aria-label='ranger radar project repository link'
              >
              -view repository.
              </a>
            </p>
          </section>
          <section>
            <div className='center-wrap'>
            <h4>San Diego Code School Highlights</h4>
            <p>
              I am very proud of how much I learned and gained both professionally and personally going through code school. Listed below are a few of the projects I'm most proud of with a description and link to their Github repository where available, thank you for viewing.
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
                    aria-label='view project details'
                    aria-controls='cheryl lees info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.cherylLeeToggle }
                    aria-label='close project details'
                    aria-controls='cheryl lees info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }> 
                <p id='cheryl lees info' tabIndex='0'>
                My mid-term code school group project, creating a custom portfolio website for Ms. Cheryl Lee to showcase her achievements, affiliations, and credentials with a clean and classy appearance, including an automated contact page. Leveraging my soft skills and proficiencies in HTML and CSS w/SASS, I played a crucial leading role in this project by helping others and developing a responsive cross-platform website with well-kept code. I was responsible for designing the main title, navigation bar, the home page, and the footer specifically. Being passionate about this project, I followed up with Ms. Lee to update and finalize the project; video demonstration is coming soon
                <a
                  href='https://github.com/MilesMickelson/Cheryl-Lee-Review'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Cheryl Lees Portfolio Website Project Github Repository'
                  aria-label='view cheryl lee project repository link'
                >
                  -view repository.
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
                    aria-label='view project details'
                    aria-controls='student tracker info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.studentTrackerToggle }
                    aria-label='close project details'
                    aria-controls='student-tracker-info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }>                
                <p id='student tracker info' tabIndex='0'>
                My final SDCS group project engaged numerous technologies simultaneously, built with React/Redux, MongoDB, Loopback, and various API's. Planning and workflow executed with Git, Scrum, and Agile. We successfully integrated a custom command into the school's slack workspace to input your information and have it saved to a database, which allows both the administration and students to view their current progress trend on a dashboard. Was individually responsible for incorporating the Github API for feedback on total commits in the last seven days-private school repository.
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
                    aria-label='view project details'
                    aria-controls='nasa viewer info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.nasaViewerToggle }
                    aria-label='close project details'
                    aria-controls='student tracker info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }>                
                <p id='student tracker info' tabIndex='0'>
                  A React web app project, allows users to view the NASA astronomy picture of the day and read all the information conveyed with it. Axios integrated on the server-side to fulfill the API call to the NASA database and a theme for the user interface to match
                <a
                  href='https://github.com/MilesMickelson/NASA-Viewer'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='NASA viewer project github repository link'
                >
                  -view repository.
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
                    aria-label='view project details'
                    aria-controls='movie finder info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.movieFinderToggle }
                    aria-label='close project details'
                    aria-controls='movie finder info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }>                
                <p id='movie finder info' tabIndex='0'>
                  React/Redux web app for movie searching, implemented with React router for navigating to a second movie details page. Making the API call to an online movie database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                <a
                  href='https://github.com/MilesMickelson/REACT200-Movie-Finder'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Movie Finder project github repository link'
                >
                -view repository.
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
                    aria-label='view project details'
                    aria-controls='weather app info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.weatherAppToggle }
                    aria-label='close project details'
                    aria-controls='weather app info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }>                
                <p id='weather app info' tabIndex='0'>
                  React/Redux web app allows users to search for a multitude of current weather information in any city by name. Includes default city buttons and recent search history. Making the API call to an online weather database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                <a
                  href='https://github.com/MilesMickelson/REACT200-Weather-App'
                  target='_blank'
                  rel='noopener noreferrer preload'
                  aria-label='React 200 Weather App project github repository link'
                >
                -view repository.
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
