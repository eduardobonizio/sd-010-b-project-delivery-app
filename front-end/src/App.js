import React from 'react';
import { Route, Routes } from 'react-router';
import {
  Login,
  Register,
  Products,
  Checkout,
  ClientOrderDetails,
  OrderDetails,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/customer/orders" element={ <ClientOrderDetails /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/seller/orders" element={ <OrderDetails /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
