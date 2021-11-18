import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/customer/Products';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route exact path="/register" component={ Register } />
      <Route path="/" component={ Login } />
      <Route path="/customer/products" component={ Products } />

    </Switch>
  );
};

export default Routes;
