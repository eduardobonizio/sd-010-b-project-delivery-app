import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Product from '../pages/customer/products';

import Login from '../pages/login';
import OrderDetails from '../pages/OrderDetails';
import Orders from '../pages/Orders';
import Register from '../pages/register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Product } />
      <Route path="/seller/orders/:id" component={ OrderDetails } />
      <Route path="/seller/orders" component={ Orders } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
