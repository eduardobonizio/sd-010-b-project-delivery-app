import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Products from './common/pages/products';
import Login from './common/pages/Login';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
