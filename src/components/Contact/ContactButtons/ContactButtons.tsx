import { Boolean } from 'aws-sdk/clients/apigateway'
import { useState } from 'react'
import { animated, useTrail } from 'react-spring'
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
      href: 'server/assets/bailey_pownell_resume.pdf', 
      className: 'fas fa-file'
    }
  ]

  const trail = useTrail(contactLinks.length, {
    from: isVisible ? { opacity: 0, transform: 'translate3d(0,-40px,0)' } : { opacity: 1, transform: 'translate3d(0,0px,0)' },
    to:  isVisible ? { opacity: 1, transform: 'translate3d(0,0px,0)' } : { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    config: { duration: 250 }
  })

  const onChange = (isVisible: boolean) => {
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