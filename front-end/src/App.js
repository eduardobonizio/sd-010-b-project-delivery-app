import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Login from './paginas/login';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Redirect to="/Login" />) } />
          <Route path="/Login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
