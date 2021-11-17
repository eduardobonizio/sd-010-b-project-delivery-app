import React, { useEffect, useState } from 'react';
import Address from './address';
import Tbody from './Tbody';
import Thead from './Thead';

function Table() {
  const [total, setTotal] = useState('0,00');

  const getTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (Object.entries(carrinho).length !== 0) {
      const calculate = Object.values(carrinho).reduce((acc, curr) => acc + curr);
      return setTotal(calculate.toFixed(2).replace(/\./, ','));
    }
    return setTotal('0,00');
  };

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <table>
      <Thead />
      <Tbody getTotal={ getTotal } />
      <p data-testid="customer_checkout__element-order-total-price">{ total }</p>
      <Address />
    </table>
  );
}

export default Table;
