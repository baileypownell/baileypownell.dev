import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import {
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
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
