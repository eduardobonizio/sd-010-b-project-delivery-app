import React from 'react';
import { CustomerProvider } from '../../../hooks/useCustomer';
import NavBar from '../../../components/navbar/NavBar';
import Form from './components/Form';
import SalesList from './components/SalesList';

function CustomerCheckout() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <CustomerProvider>
      <NavBar
        item1="Produtos"
        item2="Meus pedidos"
        user={ user.name }
      />
      <SalesList />
      <Form />
    </CustomerProvider>
  );
}

export default CustomerCheckout;
