import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default App;
