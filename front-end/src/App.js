import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  const user = localStorage.getItem('user');
  const history = useHistory();
  if (!user) {
    if (history.location.pathname.includes('register')) {
      history.push('/register');
    }
    history.push('/');
  }

  return (
    <Switch>
      <Route path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Redirect strict from="/" to="/login" />
    </Switch>
  );
}

export default App;
