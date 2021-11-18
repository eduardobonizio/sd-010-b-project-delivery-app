import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import CustomRoute from './Routes';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

import './App.css';
import SellerOrder from './pages/SellerOrder';
import AdminManage from './pages/AdminManage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Switch>
      {/* Vai receber props com path, comp e para verificar se vai renderizar
      com ou sem navbar horizontal */}
      <CustomRoute path="/login" component={ Login } /* navbar={ <NavBar /> } */ />
      <CustomRoute
        path="/customer/products"
        component={ Products }
        navbar={ <NavBar products order="Meus pedidos" /> }
      />
      <CustomRoute
        path="/seller/orders"
        component={ SellerOrder }
        navbar={ <NavBar /> }
      />
      <CustomRoute
        path="/admin/manage"
        component={ AdminManage }
        navbar={ <NavBar products={ false } order="Gerenciar usuários" /> }
      />
      <CustomRoute path="/register" component={ Register } />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
