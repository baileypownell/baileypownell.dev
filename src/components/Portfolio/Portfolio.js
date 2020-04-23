import React from 'react';

import Project from './Project/Project';

import './Portfolio.scss';

class Porfolio extends React.Component {

  fadeInElements = () => {
    let fadedElements = document.querySelectorAll('.opaque');
    for (let i = 0; i < fadedElements.length; i++) {
      let introPos = fadedElements[i].getBoundingClientRect().top;
      let screenPos = window.innerHeight/1.2;
      if (introPos < screenPos ) {
        fadedElements[i].classList.add('full');
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.fadeInElements)
  }

  render() {
    return (
      <div className="portfolio-container">
        <a name="portfolio"></a>
        <h2>Portfolio</h2>
        <div id="gallery" className="opaque">
          <Project
            name="React Weight Tracker Web App"
            github_link="https://github.com/baileypownell/React-Weight-Tracker-SPA"
            prod_link="https://weight-tracker-react.herokuapp.com/"
            images={["images/homescreen.png", "images/userinterface.png", "images/mobile.png", "images/demonstration_RWT.mp4"]}
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
          <Project
            name="Sample Beef Farm site"
            github_link="https://github.com/baileypownell/Mills-Farms"
            images={["images/millsFarmsHome.jpg", "images/millsFarmsContact.jpg", "images/millsFarmsAbout.jpg", "images/millsFarms.mp4"]}
            video="images/millsFarms.mp4"
            textblurbs={[
              `This is a sample small-business beef farm website. The purpose here was to integrate a Facebook feed, configure XAMPP to test the contact form, build a hamburger menu for mobile view, and integrate a brand logo.`,
              `Contact page.`,
              `About page.`
            ]}
          />
          <Project
            name="Local Weather App"
            github_link="https://github.com/baileypownell/Simple-Weather-Web-App"
            images={["images/weather.png"]}
            textblurbs={[
              `This weather app is an SPA built with just vanilla javascript that uses the browser's GeoLocation API to give you data on the current conditions from. Weather data is retrieved from the Dark Sky API.`
            ]}
          />
          <Project
            name="Redesign of the Indiana State Bar website"
            github_link="https://github.com/baileypownell/Indiana-State-Bar-Redesign"
            images={["images/isba_real.jpg", "images/isba_home.jpg", "images/isba_links.jpg", "images/isba_menu.jpg", "images/isba.mp4"]}
            textblurbs={[
              `I got the inspiration to redesign the Indiana State Bar's website when I had to visit it in the course of my job, and noticed how outdated and unresponsive it is. This is my take on a good makeover, while still retaining the basic set up of the site (The current site has changed slightly since I created my version, and between the time of my redesign and the time these screenshots were taken). My objectives here included incorporating SASS, parallax scrolling, jQuery, and Javascript effects.`,
              `My take on it`,
              `For my version, I used parallax scroll with both "background-position: attached;" in some places and jQuery in others. I used some JavaScriptfade-in effects and included a searchbar beneath the logo and menu button.`,
              `For the navigation menu, I at first tried a more traditional approach with dropdown links that would appear on hover. However, the navigation menu is so content-heavy that a fullpage menu, like I had for mobile, was actually a better option for the desktop version as well.`
            ]}
            video="images/isba.mp4"
          />
          <Project
            name="Band Website"
            github_link="https://github.com/baileypownell/3-Beers-Deep"
            images={["images/3bdhome.jpg", "images/3bddemo.mp4"]}
            textblurbs={[
              `This is a single-page website built with vanilla javascript and SASS, bundled with webpack and Babel for browser compatibility. It includes parallax effects and spotify player integration.`
            ]}
            video="images/3bddemo.mp4"
          />
          <Project
            name="Meal Picker App"
            github_link="https://github.com/baileypownell/Meal-Picker-React-App"
            images={["images/mealPicker.jpg", "images/mealPicker.mp4"]}
            textblurbs={[
              `This SPA is built with React. It uses an API to return recipes that match the parameters you give it, such as the type of food, which is optional, and as many ingredients as you would like.`
            ]}
            video="images/mealPicker.mp4"
            prod_link="https://meal-picker-app.herokuapp.com/"
          />
        <a name="about"></a>
        </div>
      </div>
    )
  }
}

export default Porfolio;
