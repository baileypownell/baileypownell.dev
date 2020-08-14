import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';


const WeightTrackerProjectPage = withRouter(({ history }) => (
    <>
      <Nav/>
      <div className="project-page">
        <h4>React Weight Tracker</h4>
              <img className="project-photo" src="images/VChomescreen.png" ></img>
              <p>Built with React, Node.js, Express, and PostgreSQL, this fullstack single page application involved a lot of software design concepts I hadn't used before. I used Nodemailer for sending emails when users want to change their password (for enhanced security), built the API from scratch, and used bcrypt.js for password hashing. This project came about not by following a tutorial but because I actually need something like this in my life.</p>
              <img className="project-photo" src="images/VCdashboard.png"></img>
              <img className="project-photo" src="images/VCprofile.png"></img>
          <div className="button-holder">
              <button href="https://github.com/baileypownell/React-Weight-Tracker-SPA">View Source Code</button>
              <button href="https://weight-tracker-react.herokuapp.com/">Visit Project</button>
          </div>
      </div>
    </>
  ))

export default WeightTrackerProjectPage;