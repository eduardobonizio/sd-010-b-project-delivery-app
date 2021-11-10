import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Provider from './context/ContextGlobal';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Redirect from="/" to="/login" />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
