import React from 'react';
import Nav from '../Nav/Nav';


const MealPickerProjectPage = () => (
    <>
      <Nav/>
      <div className="project-page">
        <h4>Meal Picker App</h4>
              <img className="project-photo" src="images/meal-picker.png" ></img>
              <p>This SPA is built with React. It uses an API to return recipes that match the parameters you give it, such as the type of food, which is optional, and as many ingredients as you would like.</p>
          <div className="button-holder">
              <a target="_blank" href="https://github.com/baileypownell/Meal-Picker-React-App"><button>View Source Code</button></a>
              <a target="_blank" href="https://meal-picker-app.herokuapp.com/"><button>Visit Project</button></a>
          </div>
      </div>
    </>
  )

export default MealPickerProjectPage;