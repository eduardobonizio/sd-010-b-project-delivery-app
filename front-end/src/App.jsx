import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
      <Route exact path="/" navigate element={ <Home /> } />
    </Routes>
  );
}

export default App;
