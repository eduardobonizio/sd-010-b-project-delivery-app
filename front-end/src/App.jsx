import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './pages/Checkout';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
