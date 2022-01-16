import React from 'react'

const ISBAProjectPage = () => {
  return (
    <div className="project-page">
      <input style={{display: 'none'}} tabIndex="1"></input>
      <h4>Redesign of the Indiana State Bar website</h4>
      <img className="project-photo" src="images/isba_real.jpg" ></img>
      <h3>
        While not a good example of my current skillset, this redesign of the Indiana State Bar 
        website was one of my first projects several years ago.
      </h3>
      <img className="project-photo" src="images/isba_menu.jpg" ></img>
      <h3>
        My objectives here included using SASS, parallax scrolling, jQuery, and vanilla Javascript effects. 
      </h3>
      <img className="project-photo" src="images/isba_home.jpg" ></img>
      <img className="project-photo" src="images/isba_links.jpg" ></img>
      <img className="project-photo mobile-view" src="images/isba_mobile_nav.png" ></img>
      <div className="button-holder">
          <a target="_blank" href="https://github.com/baileypownell/Indiana-State-Bar-Redesign"><button>View Source Code</button></a>
      </div>
    </div>
  )
}

export default ISBAProjectPage