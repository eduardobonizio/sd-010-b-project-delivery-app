import React from 'react';
import Navbar from '../CustomerProducts/components/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';

function CustomerOrders() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <Navbar
        item1="Produtos"
        item2="Meus pedidos"
        user={ user.name }
      />
    </OrderProvider>
  );
}

export default CustomerOrders;
