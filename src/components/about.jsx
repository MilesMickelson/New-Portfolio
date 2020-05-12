import React from 'react';

const dagger = require('../images/dagger.png');
const pool = require('../images/pool.jpg');

export default class About extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3>
            <img className='dagger1' src={ dagger } alt='' />
            About
            <img className='dagger2' src={ dagger } alt='' />
          </h3>
          <section>
            <h4>Ambition</h4>
            <p>
            Miles Mickelson, born in Sacramento, California, is currently residing in San Diego and looking to fulfill a position as a Web Designer, Frontend Developer, or a Fullstack Engineer in Columbus, OH. I am bound and determined to become the best developer that I can be and confident that taking my strengths and variety of work experience into account, it will culminate into becoming a valuable asset for anyone who employs me. It would bring me great satisfaction to produce useful results that have a positive impact on business and people's lives.
            </p>
          </section>
          <section>
            <h4>Philosophy</h4>
            <p>
              To achieve success in your venture, it comes down to daily habitual routines and a persevering mindset. I genuinely believe in being highly organized, coordinated, and maintaining specific goals throughout the planning and execution process.
            </p>
          </section>
          <section classsName='center-wrap'>
            <h4>Hobbies</h4>
            <div className='clearfix-wrap'>
              <img className='dark-glow-image' id='pool-pic' src={ pool } alt='playing pool' />
              <p id='hobbies-info'>
                As a creative and competitive person, I enjoy many activities with friends, family, and others. Most notably, I am very passionate about playing competitive pool, a well-known player and instructor David Nakano recognized this and has mentored me for years as a best friend. After applying his lessons with daily immersive practice, I competed in the U.S. Open Amateurs Tournament, making it one level away from an inclusive trip to compete in the next tier. I also enjoy reading books, playing games, hiking, and watching shows with my girlfriend, Samantha; The Office is our personal favorite.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
