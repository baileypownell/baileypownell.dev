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
        <LandingImage/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Switch>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
