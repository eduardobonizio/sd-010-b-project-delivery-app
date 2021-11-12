import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      {/* <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </div>
  );
}

export default App;
