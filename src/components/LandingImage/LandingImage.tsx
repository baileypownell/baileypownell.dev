import { animated, easings, Spring, useTrail } from 'react-spring'
import me from '../../images/pfp.jpg'
import './LandingImage.scss'

const LandingImage = () => {
  const buttons = [
    { 
      text: 'Github', 
      classesString: 'fab fa-github',
      href: 'https://github.com/baileypownell'
    },
    { 
      text: 'LinkedIn',  
      classesString: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/bailey-pownell-224606167/', 
    },
    { 
      text: 'Resume', 
      classesString: 'fas fa-file',
      href: '/bailey_pownell_resume.pdf'
    }
  ]

  const trail = useTrail(buttons.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 250, delay: 100 }
  })

  return (
    <div className="landing-screen">
      <Spring
        from={{ opacity: 0, transform: 'scale(0.9) translateX(-300px)', }}
        to={{ opacity: 1, transform: 'scale(1) translateX(0)' }}
        config={{ duration: 1000 }}>
          {(styles: any) => (
            <animated.img style={styles} id="profile-image" src={me} />
          )}
      </Spring>
      <div>
        <div className="points">
          <Spring
            from={{ opacity: 0, transform: 'scale(0.9)' }}
            to={{ opacity: 1, transform: 'scale(1)' }}
            config={{ duration: 500 }}>
              {(styles: any) => (
                <animated.h1 style={styles}><span id="hello">Hello,</span><br/> my name is Bailey</animated.h1>
              )}
          </Spring>
          <Spring
            from={{ opacity: 0, transform: 'translateX(200px)' }}
            to={{ opacity: 1, transform: 'translateX(0)' }}
            config={{ 
              duration: 1000,
              easing: easings.easeInOutQuart, 
            }}>
              {(styles: any) => (
                <animated.h2 style={styles}>
                  I am a software developer proficient in CSS, Javascript/Typescript, Node, Angular, and React.
                </animated.h2>
              )}
          </Spring>
        </div>

        <div className="buttons">
          {trail.map((props, index) => {
            const button = buttons[index]
            return (
              <animated.a
                href={button.href} 
                target='_blank'
                key={index}
                style={props}>
                <button
                  className="swipe">
                  {button.text} <i className={button.classesString}></i>
                </button>
              </animated.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LandingImage
