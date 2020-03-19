import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.png');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tealiumInfo: false,
      rangerRadarInfo: false,
      cherylLeeInfo: false,
      studentTrackerInfo: false,
      nasaViewerInfo: false,
      movieFinderInfo: false,
      weatherAppInfo: false
    };
    this.tealiumToggle = this.tealiumToggle.bind(this);
    this.rangerRadarToggle = this.rangerRadarToggle.bind(this);
    this.cherylLeeToggle = this.cherylLeeToggle.bind(this);
    this.studentTrackerToggle = this.studentTrackerToggle.bind(this);
    this.nasaViewerToggle = this.nasaViewerToggle.bind(this);
    this.movieFinderToggle = this.movieFinderToggle.bind(this);
    this.weatherAppToggle = this.weatherAppToggle.bind(this);
  }

  tealiumToggle() {
    if (this.state.tealiumInfo === true) {
      this.setState({ tealiumInfo: false });
    } else {
      this.setState({ tealiumInfo: true });
    }
  }

  rangerRadarToggle() {
    if (this.state.rangerRadarInfo === true) {
      this.setState({ rangerRadarInfo: false });
    } else {
      this.setState({ rangerRadarInfo: true });
    }
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
            <img className='dagger1' src={ dagger } alt='' />
            Projects
            <img className='dagger2' src={ dagger } alt='' />
          </h3>
          <section className='center-wrap'>
            <h4>MilesMickelson.com</h4>
            <p>
              My mission for this project was to develop a high-quality website and showcase my creative abilities. To do so, I used Node, React, Parcel, Sass, and a custom ES-Lint AirBNB configuration for clean and concise code. This website is fully responsive across all screen sizes, without the use of a single media query, and maintains the utmost browser compatibility. I was able to maximize performance, accessibility, best practices, and search engine optimization by utilizing the Lighthouse module, the final audit score–and outline, displayed below. Further, Google analytics data statistics providing support for continuous improvement
              <a
                href='https://github.com/MilesMickelson/MilesMickelson.github.io'
                className='post-link'
                rel='noopener noreferrer'
                target='_blank'
                title='Miles Mickelsons Portfolio Project Github Repository'
                aria-label='portfolio project repository link'
              >
              <i>–view repository.</i>
              </a>
            </p>
            <img className='dark-glow-image' id='audit' src={ audit } alt='audit score' />
            <p className='audit-description'>
              <i>Performance</i> - All files and images are compressed and served up in a gzip, brotli, or select image format to decrease loading time and total memory used.  Deferring all non-essential elements to the first home page load, waiting until the initial presentation is complete, and pre-renders the rest of the pages and images before you visit them maximizing navigation speed.
            </p>
            <p className='audit-description'>
              <i>Accessibility</i> - Utilizing correct aria attributes with valid values in conjunction with appropriate HTML structuring and landmark regions, the site is 100% accessible. It can be accurately navigated with a keyboard and voice assistant technology, giving informative feedback quickly for essential elements only, and when necessary, describes more for visual components.
            </p>
            <p className='audit-description'>
              <i>Best Practices</i> - Employs HTTPS and HTML attributes to avoid security vulnerabilities. All images displayed with correct aspect ratios and no browser errors logged into the console.
            </p>
            <p className='audit-description'>
              <i>Search Engine Optimization</i> - Fulfills necessary elements with proper attributes and descriptive text to increase search optimization rating with link targets and text sized appropriately.
            </p>
          </section>
          <section>
            <h4>Hackathon Events</h4>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  The Total Machine - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.tealiumInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.tealiumToggle }
                    aria-label='view project details'
                    aria-controls='tealium info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.tealiumInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.tealiumToggle }
                    aria-label='close project details'
                    aria-controls='tealium info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.tealiumInfo ? 'visible' : 'inVisible'}` }> 
                <p id='tealium info' tabIndex='0'>
                  At the 2018 Tealium Hackathon event, my team built a customer data statistic display tool to give Tealium an added service for their clients, supplying them a way to achieve coordinated marketing strategies through a simple information viewing system. As a result of our quality interface, overall presentation, and camaraderie, we finished in the top 3 finalists. My responsibilities were designing the user interface and presenting our project to a panel of judges
                  <a
                    href='https://github.com/MilesMickelson/tealium-hackathon'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='The Total Machine Project Github Repository'
                    aria-label='total machine project repository link'
                  >
                  <i>–view repository.</i>
                  </a>
                </p>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  Ranger Radar - 
                  <button
                    type='submit'
                    className={ `details-button ${this.state.rangerRadarInfo ? 'inVisible' : 'visible'}` }
                    onClick={ this.rangerRadarToggle }
                    aria-label='view project details'
                    aria-controls='ranger radar info'
                    aria-expanded='false'
                  >
                    View Details
                  </button>
                  <button
                    type='submit'
                    className={ `details-button ${this.state.rangerRadarInfo ? 'visible' : 'inVisible'}` }
                    onClick={ this.rangerRadarToggle }
                    aria-label='close project details'
                    aria-controls='ranger radar info'
                    aria-expanded='true'
                  >
                    Close Details
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.rangerRadarInfo ? 'visible' : 'inVisible'}` }> 
                <p id='ranger radar info' tabIndex='0'>
                  At the 2019 San Diego Global Zoo Hackathon event, my team built an application to provide African Rangers a way to track live animal movements and human encroachment. We integrated multiple API's to display our applications objective and provided ideas for future technology implementations such as motion sensors and thumbprinting/facial+shape recognition technology. I created the interface of the application and assisted in; our search of resources, planning, and performed as primary presentee to the panel of judges
                  <a
                    href='https://github.com/MilesMickelson/Ranger-Radar'
                    className='post-link'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='Ranger Radar Project Github Repository'
                    aria-label='ranger radar project repository link'
                  >
                  <i>–view repository.</i>
                  </a>
                </p>
              </div>
            </div>
          </section>
          <section>
            <h4>Code School Highlights</h4>
            <p>
              I am very proud of how much I learned and gained both professionally and personally graduating from San Diego Code School. Listed below are a few of the projects I'm most pleased of with a description and link to their Github repository where available, thank you for viewing.
            </p>
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
                <i>–view repository.</i>
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
                My final SDCS group project employed numerous technologies, built with React, Redux, MongoDB, Loopback, and various API's, executed with an Agile workflow. We successfully integrated a custom command into the school's slack workspace to input your information and have it saved to a database, allowing both the administration and students to view current progress trends on their dashboard. Was individually responsible for incorporating the GitHub API for displaying the total commits in the last seven days.
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
                <i>–view repository.</i>
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
                <i>–view repository.</i>
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
                <i>–view repository.</i>
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
