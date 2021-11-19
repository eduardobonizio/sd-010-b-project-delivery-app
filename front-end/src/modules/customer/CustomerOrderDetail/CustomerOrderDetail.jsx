import React from 'react';
import { OrderProvider } from '../../../hooks/useOrder';
import Navbar from '../CustomerProducts/components/NavBar';
import SalesList from './components/SalesList';

export default function CustomerOrderDetail() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <Navbar
        item1="Produtos"
        item2="Meus pedidos"
        user={ user.name }
      />
      <div>
        <h3>Detalhe do pedido</h3>
        <SalesList />
      </div>
    </OrderProvider>
  );
}
