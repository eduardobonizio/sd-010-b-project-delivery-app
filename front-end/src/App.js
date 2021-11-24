import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './contexts/createContext';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import Products from './pages/Products';
import Register from './pages/Register';
import OrderDetail from './pages/OrderDetail';
import CustomerStatus from './pages/CustomerStatus';
import Checkout from './pages/Checkout';
import SalesDetails from './pages/SalesDetails';
import SalesStatus from './pages/SalesStatus';
/**
 *
 * @returns
 */
function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/customer/orders/:id" component={ OrderDetail } />
          <Route path="/customer/orders" component={ CustomerStatus } />
          <Route path="/seller/orders/:id" component={ SalesDetails } />
          <Route path="/seller/orders" component={ SalesStatus } />
          <Route path="*" render={ () => (<h1>NOT FOUND</h1>) } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
