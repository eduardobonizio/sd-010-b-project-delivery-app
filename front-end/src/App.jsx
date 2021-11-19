import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import Register from './pages/Register';
import OrderDetails from './pages/OrderDetails';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders/:saleId" element={ <OrderDetails /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/comum/meuspedidos" element={ <MyOrders /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
