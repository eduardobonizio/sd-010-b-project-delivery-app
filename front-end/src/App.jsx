import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Produtos from './pages/Produtos';
import MeusPedidos from './pages/MeusPedidos';
import Checkout from './pages/Checkout';
import Page404 from './pages/Page404';
import OrderDetails from './pages/OrderDetails';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Produtos } />
      <Route path="/customer/orders/:idVenda" component={ OrderDetails } />
      <Route path="/customer/orders" component={ MeusPedidos } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/seller/orders/:idVenda" component={ OrderDetails } />
      <Route path="/seller/orders" component={ MeusPedidos } />
      <Route path="/page404" component={ Page404 } />
      <Route path="/admin/manage" component={ Admin } />
      <Route path="/page404" component={ Page404 } />
      <Route path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}

export default App;
