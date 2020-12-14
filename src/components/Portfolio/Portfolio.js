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
        <h2>Portfolio</h2>
        <div id="gallery" className="opaque">
          <Project
              name="Virtual Cookbook SPA"
              route_link="virtual-cookbook"
              github_link="https://github.com/baileypownell/Virtual-Cookbook"
          />
          <Project
            name="React Weight Tracker Web App"
            route_link="weight-tracker"
            github_link="https://github.com/baileypownell/React-Weight-Tracker-SPA"
          />
          <Project
            name="Band Website"
            route_link="three-beers-deep"
            github_link="https://github.com/baileypownell/3-Beers-Deep"
          />
          <Project
            name="Redesign of the Indiana State Bar website"
            route_link="isba"
            github_link="https://github.com/baileypownell/Indiana-State-Bar-Redesign"
          />
        </div>
      </div>
    )
  }
}

export default Porfolio;
