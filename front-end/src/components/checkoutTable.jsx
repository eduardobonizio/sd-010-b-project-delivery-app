import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Address from './address';
import Tbody from './Tbody';
import Thead from './Thead';
import { postSales } from '../services/sales';

function Table() {
  const [total, setTotal] = useState('0,00');
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [saleId, setSaleId] = useState('');

  const getTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (Object.entries(carrinho).length !== 0) {
      const calculate = Object.values(carrinho).reduce((acc, curr) => acc + curr);
      return setTotal(calculate.toFixed(2).replace(/\./, ','));
    }
    return setTotal('0,00');
  };

  const onClick = (e) => {
    const { name, value } = e.target;

    if (name === 'address') setAdress(value);
    if (name === 'number') setAdressNumber(value);
    if (name === 'userName') setSellerId(value);
  };

  const postSale = async (e) => {
    e.preventDefault();
    const { id } = JSON.parse(localStorage.getItem('user'));
    const newSaleBody = {
      userId: id,
      sellerId,
      totalPrice: total,
      deliveryAddress: adress,
      deliveryNumber: adressNumber,
      status: 'Pendente',
    };

    const resp = await postSales(newSaleBody);
    setSaleId(resp);
    console.log('chamei');
    return setRedirect(true);
  };

  useEffect(() => {
    getTotal();
  }, []);

  if (redirect) return <Redirect to={ `/customer/orders/${saleId}` } />;
  return (
    <table>
      <p>{adress}</p>
      <p>{adressNumber}</p>
      <p>{sellerId}</p>
      <Thead />
      <Tbody getTotal={ getTotal } />
      <p data-testid="customer_checkout__element-order-total-price">{ total }</p>
      <Address clickFuntion={ onClick } postFunction={ postSale } />
    </table>
  );
}

export default Table;
