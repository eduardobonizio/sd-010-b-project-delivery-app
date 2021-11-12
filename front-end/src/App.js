import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductsProvider from './context/provider';
import { Login, Products, Register, Checkout } from './pages';

import './App.css';

function App() {
  return (
    <ProductsProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
      </Switch>
    </ProductsProvider>
  );
}

export default App;
