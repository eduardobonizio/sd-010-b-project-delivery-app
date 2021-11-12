import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Customer from './pages/Customer';
import OrderClient from './pages/OrderClient';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="customer/products" element={ <Customer /> } />
      <Route path="customer/orders" element={ <OrderClient /> } />
    </Routes>
  );
}

export default App;
