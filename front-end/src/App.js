import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
// import rockGlass from './images/rockGlass.svg';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductsProvider from './context/provider';
import Register from './pages/Register';

function App() {
  return (
    <ProductsProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
      </Switch>
    </ProductsProvider>
  );
}

export default App;
