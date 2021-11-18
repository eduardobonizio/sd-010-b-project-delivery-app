import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/comum/meuspedidos" element={ <MyOrders /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
