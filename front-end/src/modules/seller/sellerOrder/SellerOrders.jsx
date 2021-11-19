import React from 'react';
import NavBar from '../../../components/navbar/NavBar';
import { OrderProvider } from '../../../hooks/useOrder';
import OrdersList from './components/OrdersList';

function Seller() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <OrderProvider>
      <NavBar
        item1="Pedidos"
        user={ user.name }
      />
      <div>
        <OrdersList />
      </div>
    </OrderProvider>
  );
}

export default Seller;
