import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'
import './ContactButtons.scss'

const ContactButtons = () => {

  const [isVisible, setIsVisible] = useState(false)

  const contactLinks = [
    { href: 'https://github.com/baileypownell', 
      className: 'fab fa-github'
    },
    { 
      href: 'https://www.linkedin.com/in/bailey-pownell-224606167/', 
      className: 'fab fa-linkedin'}, 
    { 
      href: 'bpownell_resume2.pdf', 
      className: 'fas fa-file'
    }
  ]

  const trail = useTrail(contactLinks.length, {
    from: isVisible ? { opacity: 0, transform: 'translate3d(0,-40px,0)' } : { opacity: 1, transform: 'translate3d(0,0px,0)' },
    to:  isVisible ? { opacity: 1, transform: 'translate3d(0,0px,0)' } : { opacity: 0, transform: 'translate3d(0,-40px,0)' }
  })

  const onChange = (isVisible) => {
    setIsVisible(isVisible)
  }

  return (
    <div className="contact-links">
      <VisibilitySensor onChange={onChange} partialVisibility>
        <>
          { trail.map((props, index) => {
            return (
              <animated.a
                key={index}
                style={props}
                href={contactLinks[index].href} 
                target="_blank">
                <i className={contactLinks[index].className}></i>
              </animated.a>
            )
          }) }
        </>
      </VisibilitySensor>
    </div>
  )
}

export default ContactButtons