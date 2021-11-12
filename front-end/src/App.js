import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Login from './pages/login';
import Register from './pages/register';
import Provider from './provider/Provider';
import Bebidas from './pages/bebidas';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/login" />) } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/customer/products" component={ Bebidas } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
