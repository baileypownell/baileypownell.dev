import React from 'react';

import computer from '../../images/data.svg';

import './LandingImage.scss';

class LandingImage extends React.Component {
  render() {
    return (
      <div className="LandingImage">
        <a name="home"></a>
        <div className="points">
          <h1>Bailey Pownell</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="skills">
          <h3>HTML5 | CSS3/ | JavaScript </h3>
          <h3>React | Redux </h3>
          <h3>Node</h3>
          <h3>Express</h3>
          <h3>PostgreSQL</h3>
        </div>
        <img src={computer} />
      </div>
    )
  }
}

export default LandingImage;
