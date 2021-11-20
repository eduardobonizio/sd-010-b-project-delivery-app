import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Switch>
      <PrivateRoute path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Redirect strict from="/" to="/login" />
    </Switch>
  );
}

export default App;
