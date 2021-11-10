import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Products from './pages/products';

function App() {
  return (
    <div className="App">
      <Route exact path="/customer/products" component={ Products } />
    </div>
  );
}

export default App;
