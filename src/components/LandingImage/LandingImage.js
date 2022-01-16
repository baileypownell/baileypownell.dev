import React from 'react';
import me from '../../../dist/images/square-profile-image.jpg';
import './LandingImage.scss';
import { Spring, animated, easings, Trail, useTrail } from 'react-spring';

const LandingImage = () => {
  const buttons = [
    {text: 'Github', classesString: 'fab fa-github'},
    {text: 'LinkedIn',  classesString: 'fab fa-linkedin'},
    {text: 'Resume', classesString: 'far fa-file"></i>'}
  ]

  const trail = useTrail(buttons.length, {
    from: { marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' }
  })

  return (
    <div className="landing-screen">
      <img id="profile-image" src={me} />
      <div>
        <div className="points">
          <Spring
            from={{ opacity: 0, transform: 'scale(0.9)' }}
            to={{ opacity: 1, transform: 'scale(1)' }}
            config={{ duration: 500 }}>
              {styles => (
                <animated.h1 style={styles}><span id="hello">Hello,</span><br/> my name is Bailey</animated.h1>
              )}
          </Spring>
          <Spring
            from={{ opacity: 0, transform: 'translateX(200px)' }}
            to={{ opacity: 1, transform: 'translateX(0)' }}
            config={{ 
              duration: 1000,
              easing: easings.easeInOutQuart, 
              delay: 5500,
              trail: 3000
            }}>
              {styles => (
                <animated.h2 style={styles}>I am a software developer proficient in HTML, CSS, Javascript, Angular and React.</animated.h2>
              )}
          </Spring>
        </div>

        <div className="buttons">
          {trail.map((props, index) => {
            return (
              <animated.button
                key={index}
                style={props}
                className="swipe"
              >
                {buttons[index].text} <i className={buttons[index].classesString}></i>
              </animated.button>
            )
          })}
        </div>
 
      </div>
    </div>
  )
}

export default LandingImage
