import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
