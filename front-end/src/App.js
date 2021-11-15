import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Customer from './pages/Customer';
import ProductsProvider from './context/ProductsProvider';
// import Home from './pages/home';

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={ <Navigate to="login" /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="customer/products" element={ <Customer /> } />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
