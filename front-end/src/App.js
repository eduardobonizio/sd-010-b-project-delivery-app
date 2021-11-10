import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './modules/login/Login';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const styles = { height: '500px' };
  return (
    <div className="container-fluid" style="height: 100px">
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    </div>
  );
}

export default App;
