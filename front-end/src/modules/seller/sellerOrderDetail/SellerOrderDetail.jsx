import React from 'react';
import NavBar from '../../../components/navbar/NavBar';
import ListProducts from './components/ListProducts';

function SellerOrderDetail() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <NavBar
        item1="PEDIDOS"
        user={ user.name }
      />
      <ListProducts />
    </>
  );
}

export default SellerOrderDetail;
