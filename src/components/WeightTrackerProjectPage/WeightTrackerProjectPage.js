import React from 'react';
import Nav from '../Nav/Nav';


const WeightTrackerProjectPage = () => (
    <>
      <Nav/>
      <div className="project-page">
        <h4>React Weight Tracker</h4>
              <img className="project-photo" src="images/homescreen.PNG" ></img>
              <p>Built with React, Node.js, Express, and PostgreSQL, this fullstack single page application involved a lot of software design concepts I hadn't used before. I used Nodemailer for sending emails when users want to change their password (for enhanced security), built the API from scratch, and used bcrypt.js for password hashing. This project came about not by following a tutorial but because I actually need something like this in my life.</p>
              <img className="project-photo" src="images/user-interface.png"></img>
              <img className="project-photo" src="images/mobile.png" className="mobile-image"></img>
          <div className="button-holder">
              <button href="https://github.com/baileypownell/React-Weight-Tracker-SPA">View Source Code</button>
              <button href="https://weight-tracker-react.herokuapp.com/">Visit Project</button>
          </div>
      </div>
    </>
  )

export default WeightTrackerProjectPage;