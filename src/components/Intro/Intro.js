import React from 'react';
import postgres from '../../images/postgresql.png';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <p>
        I develop mobile-first and fully responsive websites and web applications. My passion is giving the user a stress-free and fun experience, and I use fundamental SEO standards, ES6+ JavaScript, and the latest and most supporte CSS capabilities to get there. My go-to stack: PERN (PostgreSQL, Express, React, & Node).
      </p>
      <h2>My favorite technologies</h2>
      <i className="fab fa-html5"></i>
      <i className="fab fa-css3-alt"></i>
      <i className="fab fa-js"></i>
      <i className="fab fa-react"></i>
      <i className="fab fa-node"></i>
      <i className="fab fa-git-square"></i>
      <img src={postgres} alt="postgreSQL" />
    </div>
  )
}

export default Intro;
