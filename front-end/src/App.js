import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import Provider from './provider/Provider';

import Login from './pages/login';
import Register from './pages/Register';

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
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
