import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Products from './pages/Products';
import RegisterForm from './pages/Register';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';

import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders/1" element={ <OrderPage /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
