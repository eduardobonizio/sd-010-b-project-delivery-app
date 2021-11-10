import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Provider from './context/ContextGlobal';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Redirect from="/" to="/login" />
          <Route exact path="/login" component={ Login } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
