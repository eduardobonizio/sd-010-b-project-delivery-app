import React from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Provider from './context/provider';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import Checkout from './pages/checkout';
import customerOrders from './pages/customerOrders';
import sellerOrders from './pages/sellerOrders';
import orderDetails from './pages/orderDetails';
import manage from './pages/manage';

function App() {
  return (
    <main>
      <Provider>
        <BrowserRouter>
          {/* <Route exact path="/" component={ Login } /> */}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/customer/orders" component={ customerOrders } />
          <Route exact path="/customer/orders/:id" component={ orderDetails } />
          <Route exact path="/seller/orders" component={ sellerOrders } />
          <Route exact path="/seller/orders/:id" component={ orderDetails } />
          <Route exact path="/admin/manage" component={ manage } />
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
