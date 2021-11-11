import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Login from './paginas/login';
import Provider from './provider/Provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/login" />) } />
            <Route path="/login" component={ Login } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
