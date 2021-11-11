import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './pages/Products';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
