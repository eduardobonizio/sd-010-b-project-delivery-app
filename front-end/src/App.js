import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './modules/login/Login';
import Signup from './modules/signup/Signup';
import ProductList from './modules/customer/ProductList';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route
          exact
          path="/products/list"
          render={ (props) => <ProductList { ...props } /> }
        />
        <Route
          exact
          path="/register"
          render={ (props) => <Signup { ...props } /> }
        />
        <Route
          exact
          path="/login"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Login { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
