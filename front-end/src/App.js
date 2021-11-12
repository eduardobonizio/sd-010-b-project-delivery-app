import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import UsersProvider from './context/Users/UsersProvider';
import ProductsProvider from './context/Products/ProductsProvider';

function App() {
  return (
    <ProductsProvider>
      <UsersProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Login } />
        </Switch>
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
