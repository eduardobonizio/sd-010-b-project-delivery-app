import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './common/pages/products';
import Login from './common/pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
