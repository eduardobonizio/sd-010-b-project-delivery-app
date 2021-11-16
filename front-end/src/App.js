import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsProvider from './context/provider';
import {
  Login, Products, Register, Checkout, SellerOrders,
  SellerDetailOrder, CustomerDetailOrder, CustomerOrders, Admin } from './pages';

import './App.css';

function App() {
  return (
    <ProductsProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/orders/:id" component={ CustomerDetailOrder } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/seller/orders/:id" component={ SellerDetailOrder } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/admin/manage" component={ Admin } />
      </Switch>
    </ProductsProvider>
  );
}

export default App;
