import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Raiz from './pages/Raiz';
import Login from './pages/Login';
import RegisterScreen from './pages/RegisterScreen';
import Customer from './pages/Customer';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import DetailOrder from './pages/DetailOrder';
import SellerDetailOrder from './pages/SellerDetailOrder';
import SellerOrders from './pages/SellerOrders';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Raiz /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <RegisterScreen /> } />
        <Route exact path="/customer/products" element={ <Customer /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/customer/orders/:id" element={ <DetailOrder /> } />
        <Route exact path="/seller/orders/:id" element={ <SellerDetailOrder /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </div>
  );
}

export default App;
