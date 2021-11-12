import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
// import Products from './common/pages/products/Products';
import Login from './common/pages/Login';
import './App.css';
// import Products from '../src/common/pages/products/Products';
// import Checkout from './common/pages/checkout/Checkout';
// import ProductOrders from './common/pages/checkout/ProductOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      {/* <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } /> */}
      {/* <Route exact path="/customer/orders" component={ ProductOrders } /> */}
    </Switch>
  );
}

export default App;
