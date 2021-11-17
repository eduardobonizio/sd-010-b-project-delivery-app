import React from 'react';
import Address from './address';
import Tbody from './Tbody';
import Thead from './Thead';

function Table() {
  const getTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const total = Object.values(carrinho).reduce((acc, curr) => acc + curr);
    return total.toFixed(2).replace(/\./, ',');
  };

  return (
    <table>
      <Thead />
      <Tbody />
      <p data-testid="customer_checkout__element-order-total-price">{ getTotal() }</p>
      <Address />
    </table>
  );
}

export default Table;
