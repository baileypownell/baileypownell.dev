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
  VirtualCookbookProjectPage,
  WeightTrackerProjectPage,
} from './components/index';

import './main.scss';


ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/virtual-cookbook" component={VirtualCookbookProjectPage}/>
          <Route exact={true} path="/weight-tracker" component={WeightTrackerProjectPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>,
  document.getElementById('app')
);
