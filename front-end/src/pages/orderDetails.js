import React from 'react';
import Navbar from '../components/navbar';
import OrderDetailTable from '../components/orderDetailTable';

const OrderDetails = () => {
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  return (
    <main>
      <Navbar name={ name } role={ role } />
      <OrderDetailTable />
    </main>
  );
};

export default OrderDetails;
