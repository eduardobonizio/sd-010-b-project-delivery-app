import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import PrivateRoute from './components/PrivateRoute';
import CheckoutCart from './pages/CheckoutCart';
import ListSaleById from './pages/ListSaleById';
import ListSellerSaleById from './pages/ListSellerSaleById';
import ListOrders from './pages/ListOrders';
import SellerOrders from './pages/SellerOrders';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <PrivateRoute path="/customer/products" component={ Products } />
      <PrivateRoute path="/customer/checkout" component={ CheckoutCart } />
      <PrivateRoute path="/customer/orders/:id" component={ ListSaleById } />
      <PrivateRoute path="/customer/orders" component={ ListOrders } />
      <PrivateRoute path="/seller/orders/:id" component={ ListSellerSaleById } />
      <PrivateRoute path="/seller/orders" component={ SellerOrders } />
      <Redirect strict from="/" to="/login" />
    </Switch>
  );
}

export default App;
