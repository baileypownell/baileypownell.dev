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
  ISBAProjectPage,
  Contact,
  Navigation,
  Portfolio,
  LandingImage,
  Footer,
} from './components/index';

import './main.scss';


ReactDOM.render(
      <BrowserRouter>
        <Navigation></Navigation>
        <Footer></Footer>
        <Switch>
          <Route exact={true} path="/" component={LandingImage}/>
          <Route exact={true} path="/contact" component={Contact}/>,
          <Route path="/portfolio" component={Portfolio} />,
          {/* <Route exact={true} path="/virtual-cookbook" component={RecipeStashProjectPage}/>
          <Route exact={true} path="/weight-tracker" component={WeightTrackerProjectPage} />
          <Route exact={true} path='/three-beers-deep' component={ThreeBeersProjectPage} />
          <Route exact={true} path='/isba' component={ISBAProjectPage} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
