import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from '../pages/login';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Redirect to="/login" component={ Login } />
    </Route>
  </BrowserRouter>
);

export default Routes;
