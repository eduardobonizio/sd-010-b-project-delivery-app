import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// import { Redirect } from 'react-router';

import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/customer/products" component={ Product } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
