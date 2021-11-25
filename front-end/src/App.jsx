import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import CustomerOrders from './pages/CustomerOrders';
import Register from './pages/Register';
import Products from './pages/Products';
import SalesDetailPage from './pages/SalesDetailPage';
import SellerOrders from './pages/SellerOdrers';
import SellerOrderDetails from './pages/SellerOrderDetails';

import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders/:id" element={ <SalesDetailPage /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
