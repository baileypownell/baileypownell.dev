import React from 'react'
import './RecipeStashProjectPage.scss'
import logo from './white-logo.png'

const RecipeStashProjectPage = () => {
  return (
    <div className="project-page">
      <input style={{display: 'none'}} tabIndex="1"></input>
      <img className="logo" src={logo}></img>
      <video style={{'display': 'block', 'width': '100%'}}controls muted width="250">
        <source src="images/recipe-stash-demo-muted.mp4" type="video/mp4"/>

        Sorry, your browser doesn't support embedded videos.
      </video>
      <img className="project-photo" src="images/recipe-stash-main.png" ></img>
      <h3>
        Built with React, TypeScript, Node.js, Express, Material-UI, and PostgreSQL, Recipe Stash is a fullstack 
        single page application which involved a lot of software design concepts 
        I hadn't used before. For fun (and not because this is necessarily a good idea), 
        I decided to handle authentication myself. I decided to use session-based authentication after 
        reading a very convincing article against using JWTs for authentication purposes 
        <a target="_blank" href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/" style={{marginLeft: '3px'}}>here</a>. 
      </h3>
      <img className="project-photo" src="images/recipe-stash-recipe.png"></img>
      <img className="project-photo" src="images/recipe-stash-editing.png"></img>
      <h3>
        I eventually added the ability to filter recipes by name and catgory. 
        After that, I added functionality to "tag" recipes by features such as sugar-free, dairy-free, vegan, etc.
        I've also added a feature whereby a user can duplicate a feature as a base for a new recipe. 
        This is also the first project I did that involved integrating a WYSIWYG text editor.
      </h3>
      <h3>I'm using AWS S3 for storing the recipe images.</h3>
      <h3>React doesn't come out of the box with a good approach to localizing front end service calls, so after having worked in the Angular eco system
        I found it all but necessary to roll my own pseudo-approach to defining and exporting services for React (minus, of course, 
        the dependency injection benefits that come with Angular).
      </h3>
      <img className="project-photo mobile-view" src="images/mobile-recipe-stash-recipe.png"></img>
      <h3>This is a closed source project.</h3>
      <div className="button-holder">
          <a target="_blank" href="https://recipe-stash-1.herokuapp.com/"><button>Visit Application</button></a>
      </div>
    </div>
  )
}

export default RecipeStashProjectPage
