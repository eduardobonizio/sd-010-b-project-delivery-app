import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/orders/:id" element={ <OrderPage /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="/" navigate element={ <Home /> } />
    </Routes>
  );
}

export default App;
