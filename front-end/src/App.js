import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    /* <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div> */
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
