import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
