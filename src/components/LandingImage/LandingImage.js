import React from 'react';
import me from '../../../dist/images/square-profile-image.jpg';
import './LandingImage.scss';
import { Spring, animated } from 'react-spring';

const LandingImage = () => {
  return (
    <div className="landing-screen">
      <img id="profile-image" src={me} />
      <div>
        <div className="points">
          <Spring
            from={{ opacity: 0 }}
            to={{opacity: 1 }}
            config={{ duration: 500 }}>
              {styles => (
                <animated.h1 style={styles}><span id="hello">Hello,</span><br/> my name is Bailey</animated.h1>
              )}
          </Spring>
          {/* <h1><span id="hello">Hello,</span><br/> my name is Bailey</h1> */}
          <h2>I am a software developer proficient in HTML, CSS, Javascript, Angular and React.</h2>
        </div>
        <div className="buttons fade-in">
          <button className="swipe">Github <i className="fab fa-github"></i></button>
          <button className="swipe">LinkedIn <i className="fab fa-linkedin"></i></button>
          <button className="swipe">Resume <i className="far fa-file"></i></button>
        </div>
      </div>
    </div>
  )
}

export default LandingImage
