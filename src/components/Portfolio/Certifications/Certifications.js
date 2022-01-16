import React, { useEffect, useState } from 'react'
import { animated, useSpring, useTrail } from 'react-spring/'
import VisibilitySensor from 'react-visibility-sensor'
import udemy from '../../../../dist/images/udemy.png'
import './Certifications.scss'

const Certifications = () => {
  const [ certifications, setCertifications ] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    duration: 200,
    delay: 50,
  })

  const onChange = (isVisible) => {
    setIsVisible(isVisible)
  }

  useEffect(() => {
    fetch(`/udemy_certs`)
    .then(response => response.json())
    .then(data => setCertifications(data))
    .catch(err => console.log(err))
  }, [])

  const trail = useTrail(certifications.length, {
    from: isVisible ? { opacity: 0 } : { opacity: 1 },
    to: isVisible ? { opacity: 1 } : { opacity: 0 },
    config: { duration: 200 }
  })

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <animated.div style={styles} className="certification-container">
        <p className="udemy-title">Udemy Certificates</p>
        <div className="certifications">
          { trail.map((props, index) => {
            const cert = certifications[index]
            return (     
              <animated.a 
                key={index} 
                style={props}
                href={`/udemy_certs/${cert.link}`} 
                target="_blank">
                <div className="udemy">
                  <img src={udemy} />
                  <div>
                    <p>{cert.title.substring(0, 30)}{cert.title.length > 30 ? '...' : null}</p>
                    <p className="bold">Issued: {cert.issued}</p>
                  </div>
                </div>
              </animated.a>
            )
            })
          }
        </div>
      </animated.div>
    </VisibilitySensor>
  )
}

export default Certifications
