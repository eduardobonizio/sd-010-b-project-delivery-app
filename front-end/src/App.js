import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import Provider from './provider/Provider';

import Login from './pages/login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/Login" />) } />
            <Route path="/Login" component={ Login } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
