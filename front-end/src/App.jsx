import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import Register from './pages/Register';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders/:id" element={ <OrderPage /> } />
      <Route exact path="/comum/meuspedidos" element={ <MyOrders /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
