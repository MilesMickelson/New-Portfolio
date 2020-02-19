import React from 'react';

const dagger = require('../images/dagger.png');
const spyglass = require('../images/spyglass.png');

export default class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceInfo1: false,
      experienceInfo2: false,
      experienceInfo3: false
    };
    this.experienceToggle1 = this.experienceToggle1.bind(this);
    this.experienceToggle2 = this.experienceToggle2.bind(this);
    this.experienceToggle3 = this.experienceToggle3.bind(this);
  }

  experienceToggle1() {
    if (this.state.experienceInfo1 === true) {
      this.setState({ experienceInfo1: false });
    } else {
      this.setState({ experienceInfo1: true });
    }
  }

  experienceToggle2() {
    if (this.state.experienceInfo2 === true) {
      this.setState({ experienceInfo2: false });
    } else {
      this.setState({ experienceInfo2: true });
    }
  }

  experienceToggle3() {
    if (this.state.experienceInfo3 === true) {
      this.setState({ experienceInfo3: false });
    } else {
      this.setState({ experienceInfo3: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='page-title'>Credentials</div>
          <div className='paragraph-heading'>
            <img className='dagger1' src={ dagger } alt='dagger' />
            Education
            <img className='dagger2' src={ dagger } alt='dagger' />
          </div>
          <div className='list-wrap'>
            <ul className='cred-list'>
              <li className='list-item'>San Diego Code School: Fullstack Developer Graduated 2019</li>
              <li className='list-item'>Cicerone+Spirits Evaluator: Certified Lvl 1/Advanced 2017</li>
              <li className='list-item'>San Diego Union Carpenters: Apprenticeship Lvl 6 2006-12</li>
              <li className='list-item'>Las Vegas Dealers School: Certified Poker Dealer 2010</li>
            </ul>
          </div>
          <div className='center-wrap'>
            <div className='paragraph-heading'>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Experience
              <img className='dagger2' src={ dagger } alt='dagger' />
            </div>
            <div className='paragraph'>
              I have always been a highly motivated and self-disciplined personality, 
              seeking utmost professionalism and reliability in the workplace. 
              Acknowledged in a variety of demanding roles for an excellent capacity 
              to build strong collaborative relationships and flexibility to accept 
              various responsibilities. Furthermore, being touted for competence to 
              lead in a team environment and work as a team player, making positive 
              contributions to the success of our objective. Read about my professional 
              highlights in detail below...
            </div>
            <div className='button-wrap'>
              <button type='submit' className={ `read-more ${this.state.experienceInfo1 ? 'moreInfoHidden' : 'moreInfoVisible'}` } onClick={ this.experienceToggle1 }>
                <img id='spyglass' src={ spyglass } alt='spyglass' />
                Speakeasy Bartending
              </button>
            </div>
            <div className={ `paragraph-wrap ${this.state.experienceInfo1 ? 'moreInfoVisible' : 'moreInfoHidden'}` }>
              <div className='paragraph-heading'>
                <img className='dagger1' src={ dagger } alt='dagger' />
                Lead Speakeasy Bartender
                <img className='dagger2' src={ dagger } alt='dagger' />
              </div>
              <div className='paragraph'>
                An unexpected opportunity arrived for me when a restaurant opened up 
                in my neighborhood. I had never worked at one before but found myself 
                hired as a busser & food runner over many applicants. Within a year, 
                I was able to fill the role of server and positioned as barback 
                per my request. After gaining knowledge through attending classes 
                and learning on my own time, I earned a promotion to the speakeasy. 
                Only the highest quality and most knowledgeable bartenders worked in 
                there. Eventually, I secured the role of Lead Bartender, responsible 
                for accommodating all private parties, weekly events, and maintaining 
                an immaculate establishment. My service, passion, attention to detail, 
                and memory for regular’s preferences allowed me to earn a reputation for 
                a local’s favorite bartender among many. Often working alone, my position 
                required performing many roles and consistently methodical self-sufficiency.
              </div>
              <button type='submit' className='read-less' onClick={ this.experienceToggle1 }>
                Collapse Section
              </button>
            </div>
            <div className='button-wrap'>
              <button type='submit' className={ `read-more ${this.state.experienceInfo2 ? 'moreInfoHidden' : 'moreInfoVisible'}` } onClick={ this.experienceToggle2 }>
                <img id='spyglass' src={ spyglass } alt='spyglass' />
                Machine Operations
              </button>
            </div>
            <div className={ `paragraph-wrap ${this.state.experienceInfo2 ? 'moreInfoVisible' : 'moreInfoHidden'}` }>
              <div className='paragraph-heading'>
                <img className='dagger1' src={ dagger } alt='dagger' />
                Machine Operations Lead
                <img className='dagger2' src={ dagger } alt='dagger' />
              </div>
              <div className='paragraph'>
                In 2012 an acquaintance of mine recommended me to a local sign shop 
                where I was hired and started on the production floor. After earning 
                trust and acknowledgment for high-quality output, within a few months, 
                I trained to run every machine on the floor. Eventually gained 
                responsibility for laying out production planning, inventory management, 
                materials procurement, and interdepartmental communication.
              </div>
              <button type='submit' className='read-less' onClick={ this.experienceToggle2 }>
                Collapse Section
              </button>
            </div>
            <div className='button-wrap'>
              <button type='submit' className={ `read-more ${this.state.experienceInfo3 ? 'moreInfoHidden' : 'moreInfoVisible'}` } onClick={ this.experienceToggle3 }>
                <img id='spyglass' src={ spyglass } alt='spyglass' />
                Union Carpentry
              </button>
            </div>
            <div className={ `paragraph-wrap ${this.state.experienceInfo3 ? 'moreInfoVisible' : 'moreInfoHidden'}` }>
              <div className='paragraph-heading'>
                <img className='dagger1' src={ dagger } alt='dagger' />
                Nuclear Carpenter
                <img className='dagger2' src={ dagger } alt='dagger' />
              </div>
              <div className='paragraph'>
                At 16 years of age, I started my first business pressure washing for 
                people in my neighborhood and simultaneously delivered for Pizza Hut 
                after getting my license later. During this time, a neighbor took me 
                under his wing and offered me an opportunity to work at the San Onofre 
                Nuclear Power Plant. He was the highest-level manager for the Union 
                Carpenter’s Trade on site. During the first season, my role was 
                supporting the tradesman. After being fully immersed 60 hours a week for over 
                three months, I decided to go through the Union Carpenters apprenticeship. 
                I then found a foreman at a local job site I convinced to 
                sponsor me for getting into the trade and hire me as a level 1 apprentice. 
                I was a carpenter for the next six years employed by many contractors 
                doing finish, roofing, concrete, and scaffolding work. The reputation 
                for my work ethic earned me recommendations from my foremen for almost 
                every other job I worked as a carpenter. In my last season at the plant 
                still being an apprentice, I fulfilled a lead role for journeyman carpenters 
                new to the job site. I'm still great friends with Bill Newton and many of 
                the individuals I worked together within carpentry today.
              </div>
              <button type='submit' className='read-less' onClick={ this.experienceToggle3 }>
                Collapse Section
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
