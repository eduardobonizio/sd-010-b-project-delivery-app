import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Login from './pages/login/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
