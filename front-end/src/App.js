import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  // ClientOrderDetails,
  OrderDetails,
  MyRequests,
  Products,
  Register,
  Checkout,
  Login,
  Home,
} from './pages';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders" element={ <MyRequests /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/seller/orders" element={ <OrderDetails /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
