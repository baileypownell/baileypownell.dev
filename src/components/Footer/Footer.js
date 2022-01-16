import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring/'
import VisibilitySensor from 'react-visibility-sensor'
import './Footer.scss'

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false)

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(-10px)',
    duration: 300,
    delay: 150,
  })

  const onChange = (isVisible) => {
    setIsVisible(isVisible)
  }
  
  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <animated.footer style={styles} id="footer">
        <a href="https://github.com/baileypownell/Portfolio-React" target="_blank">
          <p className="source">See the source code for this site <i className="fas fa-code"></i></p>
        </a>
      </animated.footer>
    </VisibilitySensor>
  )
}

export default Footer
