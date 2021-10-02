import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import {
  Home,
  RecipeStashProjectPage,
  WeightTrackerProjectPage,
  ThreeBeersProjectPage, 
  ISBAProjectPage
} from './components/index';

import './main.scss';


ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/virtual-cookbook" component={RecipeStashProjectPage}/>
          <Route exact={true} path="/weight-tracker" component={WeightTrackerProjectPage} />
          <Route exact={true} path='/three-beers-deep' component={ThreeBeersProjectPage} />
          <Route exact={true} path='/isba' component={ISBAProjectPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
