import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Provider from './context/ContextGlobal';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
