import React from 'react'

const ThreeBeersProjectPage = () => {
  return (
    <div className="project-page" autofocus={true}>
      <input style={{display: 'none'}} tabIndex="1"></input>
      <h4>Three Beers Deep Band Website</h4>
      <img className="project-photo" src="images/3bdhome.jpg" ></img>
      <h3>
        This is a single-page website built with vanilla javascript and SASS, bundled with webpack and Babel for browser 
        compatibility. It includes parallax effects and a Spotify player integration.
      </h3>
      <img className="project-photo" src="images/spotify-3bd.png"></img>
      <h3>I used PHP for the back end.</h3>
      <img className="project-photo" src="images/footer-3bd.png"></img>
      <div className="button-holder">
          <a target="_blank" href="https://github.com/baileypownell/3-Beers-Deep"><button>View Source Code</button></a>
      </div>
    </div>
  )
}

export default ThreeBeersProjectPage
