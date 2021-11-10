import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      {/* <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object> */}
      <Redirect to="/login" />
      <Switch>
        <Route exact path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
