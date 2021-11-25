import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  Login,
  Register,
  Products,
  Checkout,
  ClientOrderDetails,
  SellerOrders,
  Home,
  Details,
  Management,
  OrdersDetails,
} from './pages';

function App() {
  return (
    <Routes>
      <Route exact path="/admin/manage" element={ <Management /> } />
      <Route exact path="/customer/orders/:id" element={ <Details /> } />
      <Route exact path="/customer/orders" element={ <ClientOrderDetails /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/seller/orders/:id" element={ <OrdersDetails /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
