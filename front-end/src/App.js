import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Login from './paginas/login';
import Provider from './provider/Provider';

import './App.css';
import Bebidas from './paginas/bebidas';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/login" />) } />
            <Route path="/login" component={ Login } />
            <Route path="/bebidas" component={ Bebidas } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
