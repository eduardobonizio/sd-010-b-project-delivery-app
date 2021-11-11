import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './modules/login/Login';
import Register from './modules/register/Register';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
      </Switch>
    </div>
  );
}

export default App;
