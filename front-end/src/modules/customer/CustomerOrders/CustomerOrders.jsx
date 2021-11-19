import React from 'react';
import Navbar from '../CustomerProducts/components/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';

function CustomerOrders() {
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

export default CustomerOrders;
