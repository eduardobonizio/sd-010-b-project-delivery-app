import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import OrderDetailTable from '../components/orderDetailTable';

const OrderDetails = () => {
  const [orderId, setOrderId] = useState('');

  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const getIdByUrl = () => {
    const url = window.location.href;
    const id = url.split('/')[5];
    setOrderId(id);
  };

  useEffect(() => {
    getIdByUrl();
  }, []);

  return (
    <main>
      <Navbar name={ name } role={ role } />
      <OrderDetailTable saleId={ orderId } />
    </main>
  );
};

export default OrderDetails;
