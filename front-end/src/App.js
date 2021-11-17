// Package Imports
import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
// Pages Imports
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
// Components Imports
import NavBar from './components/NavBar';
// Providers Imports
import UsersProvider from './context/Users/UsersProvider';
import ProductsProvider from './context/Products/ProductsProvider';
// Other Imports
import {
  allowedNavBarCustomerPaths,
  allowedNavBarSellerPaths,
  allowedNavBarAdminPaths } from './utils/allowanceToRender';

function App() {
  const location = useLocation();

  const verifyAllowanceToRenderNavBar = (arrayOfPaths, userRole) => {
    const shouldRenderNavBar = arrayOfPaths.some(
      (element) => element === location.pathname,
    );
    return shouldRenderNavBar
      ? <NavBar username="<username>" userRole={ userRole } />
      : null;
  };

  useEffect(() => {
    const verifyLocalStorage = () => {
      const gotLS = localStorage.getItem('customerCart');
      if (!gotLS) localStorage.setItem('customerCart', '[]');
    };

    verifyLocalStorage();
  }, []);

  return (
    <ProductsProvider>
      <UsersProvider>
        { verifyAllowanceToRenderNavBar(allowedNavBarCustomerPaths, 'customer') }
        { verifyAllowanceToRenderNavBar(allowedNavBarSellerPaths, 'seller') }
        { verifyAllowanceToRenderNavBar(allowedNavBarAdminPaths, 'admin') }
        <Switch>
          <Route path="/customer/products" component={ CustomerProducts } />
          <Route path="/customer/checkout" component={ CustomerCheckout } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route exact path="/"><Redirect to="/login" /></Route>
        </Switch>
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
