import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  useEffect(() => {
    const verifyLocalStorage = () => {
      const gotLS = localStorage.getItem('customerCart');
      if (!gotLS) localStorage.setItem('customerCart', '[]');
    };

    verifyLocalStorage();
  }, []);

  return (
    <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <Route path="/login" component={ Login } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
    </Switch>
  );
}

export default App;
