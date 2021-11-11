import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Products from './pages/products';
import Checkout from '../src/pages/checkout/Checkout';
import ProductOrders from './pages/checkout/ProductOrders';

function App() {
  return (
    <div className="App">
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ ProductOrders } />      
    </div>
  );
}

export default App;
