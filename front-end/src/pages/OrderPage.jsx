import React from 'react';
import Header from '../components/Header';
import OrderDetails from '../components/Saledetails/SaleDetails';

function OrderPage() {
  return (
    <>
      <Header userRole="customer" />
      <OrderDetails />
    </>
  );
}

export default OrderPage;
