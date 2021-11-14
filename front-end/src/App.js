import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
  Register,
  Products,
  Checkout,
  ClientOrderDetails,
  OrderDetails,
} from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/customer/orders" component={ ClientOrderDetails } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/seller/orders" component={ OrderDetails } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
