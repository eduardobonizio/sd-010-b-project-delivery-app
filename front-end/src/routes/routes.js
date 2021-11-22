import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/customer/Products';
import TableItens from '../components/Chechout/TableItens';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route exact path="/customer/checkout" component={ TableItens } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route path="/" component={ Login } />
    </Switch>
  );
};

export default Routes;
