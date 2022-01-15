import React, { useEffect } from 'react';
import { Spring, animated } from "react-spring/";
import VisibilitySensor from "react-visibility-sensor";

import './Footer.scss';

const Footer = () => {
  function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }
  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      {({ isVisible }) => (
        <Spring 
 
        from={{ opacity: 0 }}
        to={{ opacity: isVisible ? 1 : 0 }}
            config={{ duration: 500 }}>
          { styles => (
             <animated.footer style={styles} id="footer" >
              <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
                <p className="source">See the source code for this site {isVisible}<i className="fas fa-code"></i></p> 
              </a>
           </animated.footer> 
          )}
          {/* <footer id="footer">
            <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
              <p className="source">See the source code for this site <i className="fas fa-code"></i></p>
            </a>
          </footer> */}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default Footer;
