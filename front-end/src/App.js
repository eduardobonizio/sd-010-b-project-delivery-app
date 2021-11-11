import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Customer from './pages/Customer';
// import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="customer/products" element={ <Customer /> } />
    </Routes>
  );
}

export default App;
