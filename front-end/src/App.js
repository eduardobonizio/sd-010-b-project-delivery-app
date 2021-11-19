import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './modules/login/Login';
import Signup from './modules/signup/Signup';
import SellerOrders from './modules/seller/sellerOrder/SellerOrders';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './modules/admin/Admin';
import SellerOrderDetail from './modules/seller/sellerOrderDetail/SellerOrderDetail';
import CustomerProducts from './modules/customer/CustomerProducts/CustomerProducts';
import CustomerCheckout from './modules/customer/CustomerCheckout/CustomerCheckout';
import CustomerOrderDetail from
  './modules/customer/CustomerOrderDetail/CustomerOrderDetail';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route
          exact
          path="/customer/products"
          render={ (props) => <CustomerProducts { ...props } /> }
        />
        <Route
          exact
          path="/customer/checkout"
          render={ (props) => <CustomerCheckout { ...props } /> }
        />
        <Route
          exact
          path="/customer/orders/:id"
          render={ (props) => <CustomerOrderDetail { ...props } /> }
        />
        <Route
          exact
          path="/customer/orders"
          render={ (props) => <CustomerOrderDetail { ...props } /> }
        />
        <Route
          exact
          path="/register"
          render={ (props) => <Signup { ...props } /> }
        />
        <Route
          exact
          path="/login"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          exact
          path="/seller/orders"
          render={ (props) => <SellerOrders { ...props } /> }
        />
        <Route
          exact
          path="/seller/orders/:id"
          render={ (props) => <SellerOrderDetail { ...props } /> }
        />
        <Route
          exact
          path="/admin/manage"
          render={ (props) => <Admin { ...props } /> }
        />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
