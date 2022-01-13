import React from 'react';

import Project from './Project/Project';
import Certifications from './Certifications/Certifications';

import './Portfolio.scss';

class Porfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <h2>Portfolio</h2>
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

        <Certifications/>
      </div>
    )
  }
}

export default Porfolio;
