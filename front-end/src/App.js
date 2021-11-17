import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Product from './pages/Product';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/customer/products" component={ Product } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
