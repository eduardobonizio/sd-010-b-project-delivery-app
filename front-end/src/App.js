import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
