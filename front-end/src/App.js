import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import CustomRoute from './Routes';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import CustomerOrders from './pages/CustomerOrders';
import Checkout from './pages/Checkout';

import NavBar from './components/NavBar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SellerOrder from './pages/SellerOrder';
import AdminManage from './pages/AdminManage';

function App() {
  return (
    <Switch>
      {/* Vai receber props com path, comp e para verificar se vai renderizar
      com ou sem navbar horizontal */}
      <CustomRoute path="/login" component={ Login } /* navbar={ <NavBar /> } */ />
      <CustomRoute
        path="/customer/products"
        component={ Products }
        navbar={ <NavBar /> }
      />
      <CustomRoute
        path="/seller/orders"
        component={ SellerOrder }
        navbar={ <NavBar /> }
      />
      <CustomRoute
        path="/admin/manage"
        component={ AdminManage }
        navbar={ <NavBar /> }
      />
      <CustomRoute path="/register" component={ Register } />
      <CustomRoute
        path="/customer/checkout"
        component={ Checkout }
        navbar={ <NavBar /> }
      />
      <CustomRoute
        navbar={ <NavBar /> }
        path="/customer/orders"
        component={ CustomerOrders }
      />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
