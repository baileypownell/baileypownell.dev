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
        <p>
          This weight tracker app is a straightforward application whereby users can log their weight, 
          view their weight history via a graph, and set goals for themselves.
        </p>
        <img className="project-photo" src="images/happy-balance.png" ></img>
        <p>
          I built this single-page web app because I wanted to use React and Firebase to build a full-stack CRUD application. 
          This project really pushed the boundaries of what I knew at the time, and was the first project I deployed with heroku.
          I used Chart.js for building the graphs.
        </p>
        <img className="project-photo" src="images/happy-balance-mobile.png" className="mobile-image"></img>
        <p>This is a closed source project.</p>
        <div className="button-holder">
            <a target="_blank" href="https://happy-balance.herokuapp.com/"><button>Visit Project</button></a>
        </div>
      </div>
  )
}

export default WeightTrackerProjectPage;