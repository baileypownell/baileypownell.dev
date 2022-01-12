import React from 'react';

import Project from './Project/Project';

import './Portfolio.scss';

class Porfolio extends React.Component {

  // fadeInElements = () => {
  //   let fadedElements = document.querySelectorAll('.opaque');
  //   for (let i = 0; i < fadedElements.length; i++) {
  //     let introPos = fadedElements[i].getBoundingClientRect().top;
  //     let screenPos = window.innerHeight/1.2;
  //     if (introPos < screenPos ) {
  //       fadedElements[i].classList.add('full');
  //     }
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.fadeInElements)
  // }

  render() {
    return (
      <div className="portfolio-container">
        {/* <h2>Portfolio</h2> */}
        <div id="gallery">
          <Project
              id="cookbook"
          />
          <Project
            id="weight-tracker"
          />
          <Project
            github_link="https://github.com/baileypownell/3-Beers-Deep"
            id="band-website"
          />
          <Project
            github_link="https://github.com/baileypownell/Indiana-State-Bar-Redesign"
            id="isba"
          />
        </div>
      </div>
    )
  }
}

export default Porfolio;
