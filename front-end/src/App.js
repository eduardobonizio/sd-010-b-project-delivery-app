import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Product from './pages/Product';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import CardList from './components/CardList';
import './App.css';
import OrderDetails from './pages/OrderDetails';
import OrdersCustomer from './pages/OrdersCustomers';

function App() {
  return (
    <Switch>
      <Route exact path="/customer/products" component={ Product } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/customer/orders" component={ OrdersCustomer } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/card" component={ CardList } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
