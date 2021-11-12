import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import CustomRoute from './Routes';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Products from './pages/Products';

import './App.css';

function App() {
  return (
    <Switch>
      {/* Vai receber props com path, comp e para verificar se vai renderizar
      com ou sem navbar horizontal */}
      <CustomRoute path="/products" component={ Products } navbar={ <NavBar /> } />
      <CustomRoute path="/login" component={ Login } />
      <Redirect from="/" to="/login" />
    </Switch>

  );
}

export default App;
