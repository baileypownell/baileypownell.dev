import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";


import {
  Contact,
  Portfolio,
  LandingImage,
} from './components/index';

import './main.scss';


ReactDOM.render(
      <BrowserRouter>
        <LandingImage/>
        <Portfolio/>
        <Contact/>
        <Switch>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
