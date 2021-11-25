import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Login from './common/pages/Login';
import Register from './common/pages/Register';

import './App.css';
import Products from './common/pages/products/Products';
import Checkout from './common/pages/checkout/Checkout';
import Admin from './common/pages/admin/Admin';
import OrderDetails from './common/pages/orderDetailsClient/OrderDetails';
import OrderDetailsSeller from './common/pages/orderDetailsSeller/OrderDetailsSeller';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ OrderDetails } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/seller/orders/:id" component={ OrderDetailsSeller } />
      {/* <Route exact path="/customer/orders/:id" component={ OrderDetails } /> */}
    </Switch>
  );
}

export default App;
