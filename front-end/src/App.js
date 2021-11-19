import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './Context/AppProvider';

import Products from './pages/Products';
import Login from './pages/Login';
import './App.css';
import PagesOrder from './pages/PagesOrder';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/orders" component={ PagesOrder } />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
