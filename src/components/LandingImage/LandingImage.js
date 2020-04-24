import React, { useEffect } from 'react';

import computer from '../../images/data.svg';

import './LandingImage.scss';

class LandingImage extends React.Component {

  fadeInElements = () => {
    let fadedElements = document.querySelectorAll('.faded');
    for (let i = 0; i < fadedElements.length; i++) {
      let introPos = fadedElements[i].getBoundingClientRect().top;
      let screenPos = window.innerHeight/1.2;
      if (introPos < screenPos ) {
        fadedElements[i].classList.add('fade-in');
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.fadeInElements()
    }, 700);
  }

  render() {
    return (
      <div className="LandingImage">
        <a name="home"></a>
        <div className="points faded">
          <h1>Bailey Pownell</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="skills faded">
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
