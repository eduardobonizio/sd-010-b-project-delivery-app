import React from 'react';
import ProductList from './components/ProductList';
import RedirectButton from '../../../components/RedirectButton';
import Navbar from './components/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';

function CustomerProducts() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <Navbar
        item1="PRODUTOS"
        item2="MEUS PEDIDOS"
        user={ user.name }
      />
    </OrderProvider>
  );
}

export default CustomerProducts;