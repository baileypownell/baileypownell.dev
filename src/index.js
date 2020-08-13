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
  ProjectPage
} from './components/index';

import './main.scss';


ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/project" component={ProjectPage}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
