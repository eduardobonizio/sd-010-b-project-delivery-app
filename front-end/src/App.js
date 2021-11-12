import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Provider from './context/ContextGlobal';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrdersId from './pages/CustomerOrdersId';
import CustomerOrdersIdVenda from './pages/CustomerOrdersIdVenda';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersId from './pages/SellerOrdersId';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
          <Route exact path="/customer/checkout" component={ CustomerCheckout } />
          <Route exact path="/customer/orders" component={ CustomerOrders } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrdersId } />
          <Route
            exact
            path="/customer/orders/:idVenda"
            component={ CustomerOrdersIdVenda }
          />
          <Route path="/seller/orders" component={ SellerOrders } />
          <Route path="/seller/orders/:id" component={ SellerOrdersId } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
