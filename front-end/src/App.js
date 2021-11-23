import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import PrivateRoute from './components/PrivateRoute';
import CheckoutCart from './pages/CheckoutCart';
import ListSaleById from './pages/ListSaleById';
import ListOrders from './pages/ListOrders';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <PrivateRoute path="/customer/products" component={ Products } />
      <PrivateRoute path="/customer/checkout" component={ CheckoutCart } />
      <PrivateRoute path="/customer/orders/:id" component={ ListSaleById } />
      <PrivateRoute path="/customer/orders" component={ ListOrders } />
      <PrivateRoute path="/customer/orders" component={ ListOrders } />
      <PrivateRoute path="/seller/orders" component={ ListOrders } />
      <Redirect strict from="/" to="/login" />
    </Switch>
  );
}

export default App;
