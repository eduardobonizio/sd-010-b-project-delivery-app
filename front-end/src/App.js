import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Login from './pages/login';
import Register from './pages/register';
import Provider from './provider/Provider';
import Produtos from './pages/produtos';

import './App.css';
import MeusPedidos from './pages/meusPedidos';
import Checkout from './pages/checkout';
import Page404 from './pages/page404';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/login" />) } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/customer/products" component={ Produtos } />
            <Route path="/customer/meusPedidos" component={ MeusPedidos } />
            <Route path="/customer/checkout" component={ Checkout } />
            <Route path="/page404" component={ Page404 } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
