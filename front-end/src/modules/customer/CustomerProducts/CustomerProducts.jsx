import React from 'react';
import ProductList from './components/ProductList';
import RedirectButton from '../../../components/RedirectButton';
import NavBar from '../../../components/navbar/NavBar';
import { CustomerProvider } from '../../../hooks/useCustomer';

function CustomerProducts() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <CustomerProvider>
      <NavBar
        item1="Produtos"
        item2="Meus pedidos"
        user={ user.name }
      />
      <ProductList />
      <RedirectButton />
    </CustomerProvider>
  );
}

export default CustomerProducts;
