import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Product } />
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
