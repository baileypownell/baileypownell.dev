import React, { useEffect } from 'react';

import computer from '../../../dist/images/1633797727046.jpg';

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
      <div className="landing-screen">
        <img src={computer} />
        <div>
        <div className="points faded">
          <h1><span id="hello">Hello,</span><br/> my name is Bailey</h1>
          <h2>I am a software developer proficient in HTML, CSS, Javascript, Angular and React.</h2>
        </div>
        <div className="skills faded">
          <button className="swipe">Github <i className="fab fa-github"></i></button>
          <button className="swipe">LinkedIn <i className="fab fa-linkedin"></i></button>
          <button className="swipe">Resume <i className="far fa-file"></i></button>
        </div>
        </div>
   
        
      </div>
    )
  }
}

export default LandingImage;
