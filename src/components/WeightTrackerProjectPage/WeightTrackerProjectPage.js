import React from 'react'

function WeightTrackerProjectPage() {
  
  return (
      <div className="project-page">
        <input style={{display: 'none'}} tabIndex="1"></input>
        <h4>Happy Balance</h4>
              <img className="project-photo" src="images/homescreen.PNG" ></img>
              <p>I built this single-page web app not because I thought I could build a better program than the already-existing weight trackers, but because I wanted to use React and Firebase to build a full-stack CRUD application, complete with authentication. This project really pushed the boundaries of what I knew, and was the first project I deployed with heroku.
              The most difficult part of the project was converting the dates stored in the back end into an appropriate format for the "date" column of the Recent Weight Logs box and comparing and sorting them for display to the user. I used Chart.js for the graph, which was a piece of cake.
              One of the many reasons I chose React for this project is the possibility to use React Native to turn this into an actual mobile app.</p>
              <img className="project-photo" src="images/user-interface.png"></img>
              <img className="project-photo" src="images/rwt-mobile.png" className="mobile-image"></img>
              <p>This is a closed source project.</p>
          <div className="button-holder">
              <a target="_blank" href="https://happy-balance.herokuapp.com/"><button>Visit Project</button></a>
          </div>
      </div>
  )
}

export default WeightTrackerProjectPage;