import React from 'react';
import { CustomerProvider } from '../../../hooks/useCustomer';
import Navbar from '../CustomerProducts/components/NavBar';
import Form from './components/Form';
import SalesList from './components/SalesList';

function CustomerCheckout() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <CustomerProvider>
      <Navbar
        item1="PRODUTOS"
        item2="MEUS PEDIDOS"
        user={ user.name }
      />
      <SalesList />
      <Form />
    </CustomerProvider>
  );
}

export default CustomerCheckout;
