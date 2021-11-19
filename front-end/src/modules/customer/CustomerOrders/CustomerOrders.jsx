import React from 'react';
import OrdersList from './components/OrdersList';
import NavBar from '../../../components/navbar/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';

function CustomerOrders() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <NavBar
        item1="Produtos"
        item2="Meus pedidos"
        user={ user.name }
      />
      <OrdersList />
    </OrderProvider>
  );
}

export default CustomerOrders;
