import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
