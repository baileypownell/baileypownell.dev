import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import './ProjectPage.scss';

function VirtualCookbookProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);  
  
  return (
    <>
      <Nav/>
      <div className="project-page">
        <h4>Virtual Cookbook SPA</h4>
              <img className="project-photo" src="images/desktop_dashboard.png" ></img>
              <p>Built with React, Node.js, Express, and PostgreSQL, this fullstack single page application involved a lot of software design concepts I hadn't used before. Although I would never do this for a truly production-level application, I decided to handle authentication myself. I used Nodemailer for sending emails when users want to change their password (for enhanced security), built the API from scratch, and used bcrypt.js for password hashing. I also added session-based authentication after reading a very convincing article against JWTs <a target="_blank" href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/">here</a>. This project came about not by following a tutorial but because I actually needed something like this in my life.
              </p>
              <img className="project-photo" src="images/desktop_dashboard_filtering.png"></img>
              <img className="project-photo" src="images/recipe_desktop.png"></img>
              <img className="project-photo mobile-view" src="images/settings_mobile.png"></img>
          <div className="button-holder">
              <a target="_blank" href="https://github.com/baileypownell/Virtual-Cookbook"><button>View Source Code</button></a>
              <a target="_blank" href="https://glacial-savannah-05736.herokuapp.com/"><button>Visit Project</button></a>
          </div>
      </div>
    </>
  )
}

export default VirtualCookbookProjectPage;
