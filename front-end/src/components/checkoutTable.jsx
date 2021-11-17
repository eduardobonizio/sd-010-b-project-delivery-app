import React from 'react';
import Address from './address';
import Tbody from './Tbody';
import Thead from './Thead';

function Table() {
  return (
    <table>
      <Thead />
      <Tbody />
      <p data-testid="customer_checkout__element-order-total-price">total</p>
      <Address />
    </table>
  );
}

export default Table;
