import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import CustomRoute from './Routes';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import CustomerOrders from './pages/CustomerOrders';
import Checkout from './pages/Checkout';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        navbar={ <NavBar order="Produtos" pedidos /> }
      />
      <CustomRoute
        path="/seller/orders"
        component={ SellerOrder }
        navbar={ <NavBar order="Pedidos" /> }
      />
      <CustomRoute
        path="/admin/manage"
        component={ AdminManage }
        navbar={ <NavBar order="Gerenciar usuários" /> }
      />
      <CustomRoute path="/register" component={ Register } />

      <CustomRoute
        path="/customer/checkout"
        component={ Checkout }
        navbar={ <NavBar order="Pedidos" /> }
      />
      <CustomRoute
        navbar={ <NavBar order="Pedidos" /> }
        path="/customer/orders"
        component={ CustomerOrders }
      />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
