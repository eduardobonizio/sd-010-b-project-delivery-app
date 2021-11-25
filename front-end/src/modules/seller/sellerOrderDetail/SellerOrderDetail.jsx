import React from 'react';
import NavBar from '../../../components/navbar/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';
import ProductsList from './components/ProductsList';

function SellerOrderDetail() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <NavBar
        item1="PEDIDOS"
        user={ user.name }
      />
      <h3>Detalhe do pedido</h3>
      <ProductsList />
    </OrderProvider>
  );
}

export default SellerOrderDetail;
