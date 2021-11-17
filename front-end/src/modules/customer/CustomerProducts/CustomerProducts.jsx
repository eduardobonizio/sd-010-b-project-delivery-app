import React from 'react';
import ProductList from './components/ProductList';
import RedirectButton from '../../../components/RedirectButton';
import Navbar from './components/NavBar';
import { CustomerProvider } from '../../../hooks/useCustomer';

function CustomerProducts() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <CustomerProvider>
      <Navbar
        item1="PRODUTOS"
        item2="MEUS PEDIDOS"
        user={ user.name }
      />
      <ProductList />
      <RedirectButton />
    </CustomerProvider>
  );
}

export default CustomerProducts;
