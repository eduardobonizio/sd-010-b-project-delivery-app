import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import PrivateRoute from './components/PrivateRoute';
import CheckoutCart from './components/CheckoutCart';

function App() {
  return (
    <Switch>
      <Redirect strict from="/" to="/login" />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <PrivateRoute path="/customer/products" component={ Products } />
      <PrivateRoute path="/customer/checkout" component={ CheckoutCart } />
    </Switch>
  );
}

export default App;
