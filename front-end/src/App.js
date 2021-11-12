import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import UsersProvider from './context/Users/UsersProvider';
import ProductsProvider from './context/Products/ProductsProvider';

function App() {
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
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Login } />
          <Route path="/customer/checkout" component={ CustomerCheckout } />
        </Switch>
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
