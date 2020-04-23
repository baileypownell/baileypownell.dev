import React, { useEffect } from 'react';
import postgres from '../../images/postgresql.png';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <p className="faded">
        I develop mobile-first and fully responsive websites and web applications. My passion is giving the user a stress-free and fun experience, and I use fundamental SEO standards, ES6+ JavaScript, and the latest and most supporte CSS capabilities to get there. My go-to stack: PERN (PostgreSQL, Express, React, & Node).
      </p>
      <h2 className="faded">My favorite technologies</h2>
      <i className="fab fa-html5 faded"></i>
      <i className="fab fa-css3-alt faded"></i>
      <i className="fab fa-js faded"></i>
      <i className="fab fa-react faded"></i>
      <i className="fab fa-node faded"></i>
      <i className="fab fa-git-square faded"></i>
      <img src={postgres} alt="postgreSQL" className="faded" />
    </div>
  )
}

export default Intro;
