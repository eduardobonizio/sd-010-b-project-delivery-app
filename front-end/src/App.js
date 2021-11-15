import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {
  Login,
  Register,
  Products,
  Checkout,
  ClientOrderDetails,
  OrderDetails,
  Home,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/customer/orders" component={ ClientOrderDetails } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route path="/seller/orders" component={ OrderDetails } />
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
