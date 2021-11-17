import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Customer from './pages/Customer';
import OrderClient from './pages/OrderClient';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="customer/products" element={ <Customer /> } />
      <Route path="customer/orders" element={ <OrderClient /> } />
      <Route path="checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
