import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import CustomRoute from './Routes';
import Login from './pages/Login';
import Register from './pages/Register';
// import NavBar from './components/NavBar';

function App() {
  return (
    <Switch>
      {/* Vai receber props com path, comp e para verificar se vai renderizar
      com ou sem navbar horizontal */}
      <CustomRoute path="/login" component={ Login } /* navbar={ <NavBar /> } */ />
      <CustomRoute path="/register" component={ Register } />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
