import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Product from './pages/Product';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/customer/products" component={ Product } />
        <Route path="/login" component={ Login } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
