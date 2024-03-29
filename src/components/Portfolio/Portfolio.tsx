import { useState } from 'react';
import { animated, useSpring } from 'react-spring/';
import VisibilitySensor from 'react-visibility-sensor';
import Project from './Project/Project';
import Certifications from './Certifications/Certifications';
import './Portfolio.scss';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    duration: 200,
    delay: 50,
  });

  const onChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <animated.div style={styles} className="portfolio-container">
        <h2>Portfolio</h2>
        <div id="gallery">
          <Project
            github_link="https://github.com/baileypownell/recipe_stash"
            id="cookbook"
          />
          <Project
            github_link="https://github.com/baileypownell/happy_balance"
            id="weight-tracker"
          />
          <Project
            github_link="https://github.com/baileypownell/3-Beers-Deep"
            id="band-website"
          />
        </div>
        <Certifications />
      </animated.div>
    </VisibilitySensor>
  );
};

export default Portfolio;
