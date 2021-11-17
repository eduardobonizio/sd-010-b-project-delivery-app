import React from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

function Table() {
  return (
    <table>
      <Thead />
      <Tbody />
      <p data-testid="customer_checkout__element-order-total-price">total</p>
    </table>
  );
}

export default Table;
