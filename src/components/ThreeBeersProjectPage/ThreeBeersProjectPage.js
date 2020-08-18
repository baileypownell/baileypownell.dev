import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';


function ThreeBeersProjectPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 

  return (
    <>
      <Nav/>
      <div className="project-page">
        <h4>Three Beers Deep Band Website</h4>
              <img className="project-photo" src="images/3bdhome.jpg" ></img>
              <p>This is a single-page website built with vanilla javascript and SASS, bundled with webpack and Babel for browser compatibility. It includes parallax effects and spotify player integration.</p>
              <img className="project-photo" src="images/spotify-3bd.png"></img>
              <p>For reasons unknown to me now, I built this project with PHP.</p>
              <img className="project-photo" src="images/footer-3bd.png"></img>
          <div className="button-holder">
              <a target="_blank" href="https://github.com/baileypownell/3-Beers-Deep"><button>View Source Code</button></a>
          </div>
      </div>
    </>
  )
}

export default ThreeBeersProjectPage;
