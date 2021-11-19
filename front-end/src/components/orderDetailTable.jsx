import React from 'react';
import OrderDetailHeader from './orderDetailHeader';
import OrderDetailsTbody from './orderDetailsTbody';
import Thead from './Thead';

function OrderDetailsTable() {
  return (
    <main>
      <OrderDetailHeader />
      <table>
        <Thead />
        <OrderDetailsTbody />
      </table>
      <p data-testid="customer_checkout__element-order-total-price">total</p>
    </main>
  );
}

export default OrderDetailsTable;
