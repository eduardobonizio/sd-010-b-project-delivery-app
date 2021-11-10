import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/costumer/products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/customer/products" element={ <Products /> } />
      </Routes>
    </div>
  );
}

export default App;
