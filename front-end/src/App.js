import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import Login from './pages/login';
import CustumerProducts from './pages/custumerProducts';

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ CustumerProducts } />
    </Switch>
=======
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
>>>>>>> 7721979d9350c3f8aeb1082a0650371dfc19a033
  );
}

export default App;
