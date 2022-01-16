import React from 'react'
import logo from './cover-dark.png'

function WeightTrackerProjectPage() {
  
  return (
      <div className="project-page">
        <input style={{display: 'none'}} tabIndex="1"></input>
        <img className="logo" src={logo}/>
        <video style={{'display': 'block', 'width': '100%'}}controls muted width="250">
          <source src="images/happy-balance-demo.mp4"
                  type="video/mp4"/>
          Sorry, your browser doesn't support embedded videos.
        </video>
        <h3>
          This weight tracker app is a straightforward application whereby users can log their weight, 
          view their weight history via graphs and tables, and set goals for themselves.
        </h3>
        <img className="project-photo" src="images/happy-balance.png" ></img>
        <h3>
          I built this single-page web app because I wanted to use React and Firebase to build a full-stack CRUD application. 
          This project really pushed the boundaries of what I knew at the time, and was the first project I deployed with heroku.
          I used Chart.js for building the graphs.
        </h3>
        <img className="project-photo" src="images/happy-balance-mobile.png" className="mobile-image"></img>
        <h3>This is a closed source project.</h3>
        <div className="button-holder">
          <a target="_blank" href="https://happy-balance.herokuapp.com/"><button>Visit Application</button></a>
        </div>
      </div>
  )
}

export default WeightTrackerProjectPage;