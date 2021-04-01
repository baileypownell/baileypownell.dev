import React from 'react'


function ISBAProjectPage() {

  return (
      <div className="project-page">
        <h4>Redesign of the Indiana State Bar website</h4>
              <img className="project-photo" src="images/isba_real.jpg" ></img>
              <p>I got the inspiration to redesign the Indiana State Bar's website when I had to visit it in the course of my job, and noticed how outdated and unresponsive it is. This is my take on a good makeover, while still retaining the basic set up of the site (The current site has changed slightly since I created my version, and between the time of my redesign and the time these screenshots were taken).</p>
              <img className="project-photo" src="images/isba_menu.jpg" ></img>
              <p>My objectives here included incorporating SASS, parallax scrolling, jQuery, and Javascript effects. For my version, I used parallax scroll with both "background-position: attached;" in some places and jQuery in others. I used some JavaScript fade-in effects and included a searchbar beneath the logo and menu button. For the navigation menu, I at first tried a more traditional approach with dropdown links that would appear on hover. However, the navigation menu is so content-heavy that a fullpage menu, like I had for mobile, was actually a better option for the desktop version as well.</p>
              <img className="project-photo" src="images/isba_home.jpg" ></img>
              <img className="project-photo" src="images/isba_links.jpg" ></img>
              <img className="project-photo mobile-view" src="images/isba_mobile_nav.png" ></img>
          <div className="button-holder">
              <a target="_blank" href="https://github.com/baileypownell/Indiana-State-Bar-Redesign"><button>View Source Code</button></a>
          </div>
      </div>
  )
}

export default ISBAProjectPage;