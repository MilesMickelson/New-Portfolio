import React from 'react';

const dagger = require('../images/dagger.png');
const spyglass = require('../images/spyglass.png');
const speakeasy = require('../images/speakeasy.jps');

export default class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakeasyInfo: false,
      machiningInfo: false,
      carpentryInfo: false
    };
    this.speakeasyToggle = this.speakeasyToggle.bind(this);
    this.machiningToggle = this.machiningToggle.bind(this);
    this.carpentryToggle = this.carpentryToggle.bind(this);
  }

  speakeasyToggle() {
    if (this.state.speakeasyInfo === true) {
      this.setState({ speakeasyInfo: false });
    } else {
      this.setState({ speakeasyInfo: true });
    }
  }

  machiningToggle() {
    if (this.state.machiningInfo === true) {
      this.setState({ machiningInfo: false });
    } else {
      this.setState({ machiningInfo: true });
    }
  }

  carpentryToggle() {
    if (this.state.carpentryInfo === true) {
      this.setState({ carpentryInfo: false });
    } else {
      this.setState({ carpentryInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3><img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
            Credentials
          <img className='dagger2' src={ dagger } alt='dagger' rel='preload' /></h3>
          <section>
            <h4>Publications</h4>
            <div className='large-list-wrap top-margin'>
              <ul>
                <li>Medium: Hacking the Developers Toolbox - Coming Soon!</li>
                <li className='list-item-link'>
                  <a
                    href='https://medium.com/@milesmickelson87/a-journey-through-coding-boot-camp-78c55f6b9a20'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='medium article link'
                  >
                    Medium: Journey Through Code School Bootcamp
                  </a>
                </li>
                <li>YouTube: Demonstration of Cheryl Lee's Website - Coming Soon!</li>
              </ul>
            </div>
          </section>
          <section>
            <h4>Education</h4>
              <div className='large-list-wrap top-margin'>
                <ul>
                  <li>San Diego Code School: Fullstack Developer, Graduated 2019</li>
                  <li>Cicerone+Spirits Evaluator: Certified Lvl 1/Advanced, 2017</li>
                  <li>San Diego Union Carpenters: Apprenticeship Lvl 6, 2006-12</li>
                  <li>Las Vegas Dealers School: Certified Poker Dealer, 2010</li>
                </ul>
              </div>
          </section>
          <section>
            <div className='center-wrap'>
              <h4>Experience</h4>
              <p>
                I have always had a highly motivated and self-disciplined personality, seeking the utmost professionalism and reliability in the workplace. Throughout a variety of demanding roles, I have been acknowledged for my capacity to build strong, collaborative relationships, and for an ability to accept a multitude of responsibilities. Furthermore, being touted for competence to lead in a team environment and work as a team player, making positive contributions to the success of our objective-read more below...
              </p>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.speakeasyInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.speakeasyToggle }
                    className='details-button'
                  >
                  Speakeasy Bartending - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `${this.state.speakeasyInfo ? 'visible' : 'inVisible'}` }> 
              <h5>Lead Speakeasy Bartender</h5>
              <div className='clearfix-wrap'>
                <img className='dark-glow-image' id='speakeasy-pic' src={ speakeasy } alt='speakeasy' />
                <div className='center-wrap'>
                  <p id='speakeasy-info' aria-hidden='true'>
                    An unexpected opportunity arrived for me when a restaurant opened up in my neighborhood. I had never worked at one before but found myself hired as a busser & food runner over many applicants. Within a year, I was able to fill the role of server and positioned as barback per my request. After gaining knowledge through attending classes and learning on my own time, I earned a promotion to the speakeasy. Only the highest quality and most knowledgeable bartenders worked in there. Eventually, I secured the role of Lead Bartender, responsible for accommodating all private parties, weekly events, and maintaining an immaculate establishment. My service, passion, attention to detail, and memory for regular’s preferences allowed me to earn a reputation for a local’s favorite bartender, among many. Often working alone, my position required performing many roles and consistently methodical self-sufficiency.
                  </p>
                  <button type='submit' className='close-details red-glow-text' onClick={ this.speakeasyToggle }>
                    Close Details
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.machiningInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.machiningToggle }
                    className='details-button'
                  >
                  Machine Operations - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.machiningInfo ? 'visible' : 'inVisible'}` }>
              <h5>Machine Operations Lead</h5>
              <p aria-hidden='true'>
                In 2012 an acquaintance of mine recommended me to a local sign shop where I was hired and started on the production floor. After earning trust and acknowledgment for high-quality output, within a few months, I trained to run every machine in the production room. I eventually gained responsibility for job planning workflow design, inventory management, materials procurement, and interdepartmental communication throughout the manufacturing process.
              </p>
              <button type='submit' className='close-details red-glow-text' onClick={ this.machiningToggle }>
                Close Details
              </button>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.carpentryInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.carpentryToggle }
                    className='details-button'
                  >
                  Union Carpentry - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.carpentryInfo ? 'visible' : 'inVisible'}` }>
              <h5>Nuclear Carpenter</h5>
              <p aria-hidden='true'>
                At 16 years of age, I started my first business pressure washing for people in my neighborhood and simultaneously delivered for Pizza Hut after getting my license later. During this time, a neighbor took me under his wing and offered me an opportunity to work at the San Onofre Nuclear Power Plant. He was the highest-level manager for the Union Carpenter's Trade on site. During the first season, my role was supporting the tradesman. However, after being fully immersed 60 hours a week for over three months, I decided to go through the Union Carpenters apprenticeship. I was a carpenter for the next six years employed by many contractors doing finish, roofing, concrete, and scaffolding work. The reputation for my work ethic earned me recommendations from my foremen for almost every other job I worked as a carpenter. In my last season at the plant still being an apprentice, I fulfilled a lead role for journeyman carpenters new to the job site. I'm still great friends with Bill Newton, the man who introduced me to the trade, and many of the individuals I worked together within carpentry today.
              </p>
              <button type='submit' className='close-details red-glow-text' onClick={ this.carpentryToggle }>
                Close Details
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
