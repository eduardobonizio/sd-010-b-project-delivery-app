import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import CustumerProducts from './pages/custumerProducts';

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ CustumerProducts } />
    </Switch>
  );
}

export default App;
