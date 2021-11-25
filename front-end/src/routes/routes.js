import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/customer/Products';
import Checkout from '../pages/customer/Checkout';
import CostumerOrder from '../pages/CustomerOrder';
import OrderDetails from '../pages/OrderDetails';

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Switch>
      {location.pathname === '/'
        ? <Redirect to="/login" />
        : null}
      <Route exact path="/customer/orders" component={ CostumerOrder } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/" component={ Login } />

    </Switch>
  );
};

export default Routes;
