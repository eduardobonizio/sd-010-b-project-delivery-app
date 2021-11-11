import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Login from '../pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
