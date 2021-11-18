import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ProductCard from '../components/ProductCard';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ ProductCard } />
      <Route path="/" component={ Login } />
    </Switch>
  );
};

export default Routes;
