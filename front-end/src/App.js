import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Products from './common/pages/products/Products';
import Login from './common/pages/Login';
import Register from './common/pages/Register';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
