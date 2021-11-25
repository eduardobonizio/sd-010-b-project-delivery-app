import React from 'react';
import Navbar from '../components/navbar';
import Table from '../components/checkoutTable';

const Checkout = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const { name } = userInfo;

  return (
    <main className="main-checkout-page">
      <Navbar name={ name } products="Produtos" orders="Meus Pedidos" />
      <Table />
    </main>
  );
};

export default Checkout;
