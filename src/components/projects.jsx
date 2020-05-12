import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.jpg');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workRhythmInfo: false,
      tealiumInfo: false,
      rangerRadarInfo: false,
      cherylLeeInfo: false,
      studentTrackerInfo: false,
      nasaViewerInfo: false,
      movieFinderInfo: false,
      weatherAppInfo: false
    };
    this.workRhythmToggle = this.workRhythmToggle.bind(this);
    this.tealiumToggle = this.tealiumToggle.bind(this);
    this.rangerRadarToggle = this.rangerRadarToggle.bind(this);
    this.cherylLeeToggle = this.cherylLeeToggle.bind(this);
    this.studentTrackerToggle = this.studentTrackerToggle.bind(this);
    this.nasaViewerToggle = this.nasaViewerToggle.bind(this);
    this.movieFinderToggle = this.movieFinderToggle.bind(this);
    this.weatherAppToggle = this.weatherAppToggle.bind(this);
  }

  workRhythmToggle() {
    if (this.state.workRhythmInfo === true) {
      this.setState({ workRhythmInfo: false });
    } else {
      this.setState({ workRhythmInfo: true });
    }
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
            My objective for this project was to develop a professional-grade website encompassing high-performance and creative equality. To do so, I used Node, React, Parcel, Sass, and a custom ES-Lint AirBNB configuration for clean and concise code. This website is fully responsive across all screen sizes, without the use of a single media query, and maintains the utmost browser compatibility. I was able to maximize performance, accessibility, best practices, and search engine optimization by utilizing the Lighthouse module, the final audit score–and outline, are displayed below. Furthermore, Google Analytics integrated for continuous improvement
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
              <i className='underline'>Performance </i>
              - All files and images are served in a compressed format to decrease the total size and loading time. Through asynchronous downloading in the background, the HTML parses without disruption or waiting; this enables the website delivery as quickly as possible. Once loading for the main landing page is complete, automatic pre-rendering for the remainder of the pages and links begins; this allows for an instant view of the page when navigating there.
            </p>
            <p className='audit-description'>
              <i className='underline'>Accessibility </i>
              - Utilizing the appropriate aria labels with valid values and a proper HTML structure with landmark elements, the site is 100% accessible.  Providing for full navigation with a keyboard and voice assistant technology, granting informatory feedback on only the most essential features, and quickly.
            </p>
            <p className='audit-description'>
              <i className='underline'>Best Practices </i>
              - Employs HTTPS for secure server communication and HTML attributing to assist in preventing potential vulnerabilities. All images presented with the correct aspect ratio and no browser errors logged to the console.
            </p>
            <p className='audit-description'>
              <i className='underline'>Search Engine Optimization </i>
              - Fulfills necessary elements with appropriate attributes and descriptive text to increase search optimization rating.  All link targets and fonts are sized appropriately for ease of navigating and reading.
            </p>
            <div className='iframe-container'>
              <iframe
                title='powerpoint presentation'
                frameBorder='0'
                scrolling='no'
                marginHeight='0'
                marginWidth='0'
                width='788.54'
                height='443'
                type='text/html'
                src=''
              />
              PowerPoint presentation coming soon!
            </div>
          </section>
          <section>
            <h4>Passion Projects</h4>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.workRhythmToggle }
                    aria-label='view project details'
                    aria-controls='work rhythm info'
                    aria-expanded='false'
                  >
                  Work Rhythm App
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.workRhythmInfo ? 'visible' : 'inVisible'}` }>
                <p id='work rhythm info' tabIndex='0'>
                  The Work Rhythm App is a passion project and potential business idea I've started working on as of 4/15/20. The primary objective is to build a cross-platform desktop application that can enhance workflow productivity and facilitate mindful, healthy habits. Building a website for users to visit, review the software features, and download it shall be deliberated throughout the process of developing the software. An end-mission goal of this project is to provide mobile support integrated with cross-platform functionality unique to your account. Application features include eye and postural intervals, a task item list with time tracking, and more. The plan is to release new versions when individually functioning features are ready for production. The&nbsp;
                  <a
                    href='https://workrhythmapp.com'
                    rel='noopener noreferrer preload'
                    target='_blank'
                    title='The Work Rhythm App website'
                    aria-label='Work Rhythm App website'
                  >
                    <i>
                    website
                    </i>
                  </a>
                  &nbsp;for the Work Rhythm App to enable downloading for users is currently deployed, however, only as a boilerplate to serve as a temporary exhibit and provide placeholding throughout the development process
                  <a
                    href='https://github.com/MilesMickelson/WorkRhythm-App'
                    rel='noopener noreferrer preload'
                    target='_blank'
                    title='The Work Rhythm Github Repository'
                    aria-label='Work Rhythm repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.workRhythmToggle }
                    aria-label='close project details'
                    aria-controls='work rhythm info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h4>Hackathon Events</h4>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.tealiumToggle }
                    aria-label='view project details'
                    aria-controls='tealium info'
                    aria-expanded='false'
                  >
                  The Total Machine
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.tealiumInfo ? 'visible' : 'inVisible'}` }>
                <p id='tealium info' tabIndex='0'>
                  At the 2018 Tealium Hackathon event, my team built a consumer data display tool to give Tealium an added service for their clients, providing them a method to maximize the coordination of marketing strategies through a simple information viewing system. My responsibilities were designing the user interface and presenting the project to a panel of judges. As a result of our quality interface, overall presentation, and team camaraderie, we finished as one of the top 3 finalists
                  <a
                    href='https://github.com/MilesMickelson/tealium-hackathon'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='The Total Machine Project Github Repository'
                    aria-label='total machine project repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.tealiumToggle }
                    aria-label='close project details'
                    aria-controls='tealium info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.rangerRadarToggle }
                    aria-label='view project details'
                    aria-controls='ranger radar info'
                    aria-expanded='false'
                  >
                  Ranger Radar
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.rangerRadarInfo ? 'visible' : 'inVisible'}` }>
                <p id='ranger radar info' tabIndex='0'>
                  At the 2019 San Diego Global Zoo Hackathon event, my team built an application to provide African Rangers a way to track live animal movements and human encroachment. We integrated multiple API's to display our applications objective and provided ideas for future technology implementations such as motion sensors and thumbprinting/facial+shape recognition technology. I created the user interface of the application and assisted in; our search of resources, planning, and performed as primary presentee to the panel of judges
                  <a
                    href='https://github.com/MilesMickelson/Ranger-Radar'
                    className='post-link'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='Ranger Radar Project Github Repository'
                    aria-label='ranger radar project repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.rangerRadarToggle }
                    aria-label='close project details'
                    aria-controls='ranger radar info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h4>Code School Highlights</h4>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.cherylLeeToggle }
                    aria-label='view project details'
                    aria-controls='cheryl lees info'
                    aria-expanded='false'
                  >
                  Cheryl lee's Custom Portfolio Website
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.cherylLeeInfo ? 'visible' : 'inVisible'}` }>
                <p id='cheryl lees info' tabIndex='0'>
                For my mid-term SDCS group project, we created a custom portfolio website for Ms. Lee to showcase her achievements, affiliations, and credentials. The development also included an automated contact page. Leveraging my soft skills and proficiencies in HTML and CSS, I played a leading role in this project, developing a responsive website with well-maintained code. I was responsible for designing the title, navigation bar, home page, and the footer specifically. I followed up with Ms. Lee to make updates and finalize the project
                  <a
                    href='https://github.com/MilesMickelson/Cheryl-Lee-Review'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='Cheryl Lees Portfolio Website Project Github Repository'
                    aria-label='view cheryl lee project repository link'
                  >
                    <i>
                    –view demo repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    aria-label='close cheryl lee details'
                    aria-controls='cheryl lee info'
                    aria-expanded='true'
                    onClick={ this.cherylLeeToggle }
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.studentTrackerToggle }
                    aria-label='view project details'
                    aria-controls='student tracker info'
                    aria-expanded='false'
                  >
                  SDCS Student Tracker
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.studentTrackerInfo ? 'visible' : 'inVisible'}` }>
                <p id='student tracker info' tabIndex='0'>
                My final SDCS group project employed numerous technologies, built with React, Redux, MongoDB, Loopback, and various API's, executed with an Agile workflow. We successfully integrated a custom command into the school's slack workspace where information could be entered and thereby saved to a database, further, implementing this data into a dashboard for individuals and administration to view current progress trends. I alone was responsible for incorporating the GitHub API for displaying the total commits in the last seven days. This is a private school project but you can&nbsp;
                  <a
                    href='https://docs.google.com/presentation/d/1iw3wiJjei8YvO2oOsxynlhbxU0ECeZ6zdyzsHLa7BvY/edit?usp=sharing'
                    rel='noopener noreferrer'
                    target='_blank'
                    title='Student Tracker school project presentation slides'
                    aria-label='view student tracker presentation slides'
                  >
                    <i>
                    view our presentation slides here.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.studentTrackerToggle }
                    aria-label='close project details'
                    aria-controls='student tracker info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.nasaViewerToggle }
                    aria-label='view project details'
                    aria-controls='nasa viewer info'
                    aria-expanded='false'
                  >
                  NASA Viewer
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.nasaViewerInfo ? 'visible' : 'inVisible'}` }>
                <p id='nasa viewer info' tabIndex='0'>
                  This was a React100 project, allowing users to view the NASA astronomy picture of the day and read all information conveyed with it. Axios integrated on the server-side to fulfill the API call to the NASA database and a theme for the user interface to match
                  <a
                    href='https://github.com/MilesMickelson/NASA-Viewer'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='NASA viewer project github repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.nasaViewerToggle }
                    aria-label='close project details'
                    aria-controls='nasa viewer info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.movieFinderToggle }
                    aria-label='view project details'
                    aria-controls='movie finder info'
                    aria-expanded='false'
                  >
                  Movie Finder
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.movieFinderInfo ? 'visible' : 'inVisible'}` }>
                <p id='movie finder info' tabIndex='0'>
                  This is a React200 Redux app for movie searching, implemented with React router for navigating to a second movie details page. Making the API call to an online movie database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                  <a
                    href='https://github.com/MilesMickelson/REACT200-Movie-Finder'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='React 200 Movie Finder project github repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.movieFinderToggle }
                    aria-label='close project details'
                    aria-controls='movie finder info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul>
                <li className='last-item'>
                  <button
                    type='submit'
                    className='details-button'
                    onClick={ this.weatherAppToggle }
                    aria-label='view project details'
                    aria-controls='weather app info'
                    aria-expanded='false'
                  >
                  Weather App
                  </button>
                </li>
              </ul>
              <div className={ `${this.state.weatherAppInfo ? 'visible' : 'inVisible'}` }>
                <p id='weather app info' tabIndex='0'>
                  This is also a React200 Redux single page web app allowing users to search for a multitude of current weather information in any city by name, including default city buttons and recent search history. Making the API call to an online weather database is fulfilled with Axios on the server-side,  integrated into the front end's search bar. Pulls results from a data cache if recently searched for in the last 24 hours to save hitting the API too frequently
                  <a
                    href='https://github.com/MilesMickelson/REACT200-Weather-App'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='React 200 Weather App project github repository link'
                  >
                    <i>
                    –view repository.
                    </i>
                  </a>
                </p>
                <div className='button-wrap'>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    onClick={ this.weatherAppToggle }
                    aria-label='close project details'
                    aria-controls='weather app info'
                    aria-expanded='true'
                  >
                  Close Info
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
