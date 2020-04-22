import React from 'react';

import Project from './Project/Project';

import './Portfolio.scss';

class Porfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <a name="portfolio"></a>
        <h2>Portfolio</h2>
        <div id="gallery" className="faded">
          <Project
            name="React Weight Tracker Web App"
            github_link="https://github.com/baileypownell/React-Weight-Tracker-SPA"
            prod_link="https://weight-tracker-react.herokuapp.com/"
            images={["images/homescreen.png", "images/userinterface.png", "images/mobile.png"]}
            video="images/demonstration_RWT.mp4"
            textblurbs={[
              `I built this single-page web app not because I thought I could build a better program than the already-existing weight trackers, but because I wanted to use React and Firebase to build a full-stack CRUD application, complete with authentication. This project really pushed the boundaries of what I knew, and was the first project I deployed with heroku.`,
              `The most difficult part of the project was converting the dates stored in the back end into an appropriate format for the "date" column of the Recent Weight Logs box and comparing and sorting them for display to the user. I used Chart.js for the graph, which was a piece of cake.`,
              `One of the many reasons I chose React for this project is the possibility to use React Native to turn this into an actual mobile app.`,
            ]}
          />
          <Project
            name="Virtual Cookbook SPA"
            github_link="https://github.com/baileypownell/Virtual-Cookbook"
            prod_link="https://glacial-savannah-05736.herokuapp.com/"
            images={["images/VChomescreen.png", "images/VCdashboard.png", "images/VCprofile.png"]}
            textblurbs={[
              `Built with React, Node.js, Express, and PostgreSQL, this fullstack single page application involved a lot of software design concepts I hadn't used before. I used Nodemailer for sending emails when users want to change their password (for enhanced security), built the API from scratch, and used bcrypt.js for password hashing. This project came about not by following a tutorial but because I actually need something like this in my life.`,
              `The user dashboard.`,
              `The user profile page.`,
            ]}
          />

             <div class="parent">
               <div class="website two"></div>
               <div class="darken">
                  <div class="information-banner">
                    <button><a href="https://github.com/baileypownell/Mills-Farms" target="_blank">See the Code</a></button>
                    <button class="modalBtn" id="mills">Learn More</button>
                  </div>
               </div>
              </div>
              <div class="parent">
                <div class="website three"></div>
                  <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/Simple-Weather-Web-App" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="weatherApp">Learn More</button>
                    </div>
                  </div>
                </div>
              <div class="parent">
                <div class="website four"></div>
                <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/Indiana-State-Bar-Redesign" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="isba">Learn More</button>
                    </div>
                </div>
            </div>
          <div class="parent">
            <div class="website six"></div>
            <div class="darken">
                <div class="information-banner">
                  <button><a href="https://github.com/baileypownell/3-Beers-Deep" target="_blank">See the Code</a></button>
                  <button class="modalBtn" id="threeBD">Learn More</button>
                </div>
            </div>
        </div>
        <div class="parent">
          <div class="website five"></div>
          <div class="darken">
              <div class="information-banner">
                <button><a href="https://github.com/baileypownell/Meal-Picker-React-App" target="_blank">See the Code</a></button>
                <button class="modalBtn" id="mealPickerApp">Learn More</button>
              </div>
          </div>
      </div>
      <a name="about"></a>
      </div>
      </div>
    )
  }
}

export default Porfolio;
