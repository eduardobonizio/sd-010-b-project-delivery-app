import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UsersProvider from './context/Users/UsersProvider';
import ProductsProvider from './context/Products/ProductsProvider';

function App() {
  return (
    <ProductsProvider>
      <UsersProvider>
        <Switch>
          <Route path="/customer/products" component={ Login } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route exact path="/"><Redirect to="/login" /></Route>
        </Switch>
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
