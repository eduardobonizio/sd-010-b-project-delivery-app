import React from 'react';
import Menu from '../components/menu';
import NavBar from '../components/navBar';

export default function Products() {
  return (
    <>
      <NavBar isCustomer nameButtonOrder="Meus Pedidos" linkOrder="/customer/orders" />
      <Menu />
    </>
  );
}
