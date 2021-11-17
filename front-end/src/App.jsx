import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterForm from './components/RegisterForm';
<<<<<<< HEAD
import Products from './pages/Products';
=======
import Home from './pages/Home';
>>>>>>> b8b779aac09c0d2ee7e246fa663ffbd3c6ba3c2c

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterForm /> } />
<<<<<<< HEAD
      <Route exact path="products" element={ <Products /> } />
=======
      <Route exact path="/" navigate element={ <Home /> } />
>>>>>>> b8b779aac09c0d2ee7e246fa663ffbd3c6ba3c2c
    </Routes>
  );
}

export default App;
