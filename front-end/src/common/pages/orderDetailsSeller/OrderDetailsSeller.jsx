/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../../../components/ProductsComponents/Header';
import { getAllOrdersBySellerId, setOrdersStatus } from '../../../services/api';
import OrderDetails from '../../../components/OrderDetailsSeller/OrderDetailsSeller';
import OrderDetailsTable from '../../../components/OrderDetailsSeller/OrderDetailsTable';
import addZeroes from '../../../helper/functions/addZeroes';

const OrderDetailsSeller = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Pendente');

  // const [totalPrice, setTotalPrice] = useState([]);
  const fetchOrders = async () => {
    // const token = JSON.parse(localStorage.getItem('user'));
    // const response = await getAllOrdersBySellerId(token.userId);
    const response = await getAllOrdersBySellerId(1);

    setData(response);

    console.log(response, 'data cheiroso', data.id);
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  useEffect(() => {
    setStatus(data.status);
  }, [data]);

  useEffect(() => {
    setOrdersStatus(data.id, status);
  }, [status]);

  const sumProductsPrices = () => {
    const base = data.products
      .map(({ price, SalesProducts: { quantity } }) => price * quantity);
    console.log(base, 'base');
    return base.reduce((
      acc, curr,
    ) => acc + curr, 0);
  };

  const renderTotalPrice = () => (
    <h3 data-testid="seller_order_details__element-order-total-price">
      {addZeroes(sumProductsPrices()) }
      {' '}
    </h3>
  );

  const handleClick = ({ target: { name } }) => {
    console.log(name, 'value');
    if (name === 'PREPARAR PEDIDO') {
      return setStatus('Preparando');
    }
    if (name === 'SAIU PARA ENTREGA') {
      return setStatus('Em Trânsito');
    }
  };

  return (
    <main>
      <Header />
      {data && <OrderDetails
        Pedido={ data.id }
        Data={ data.saleDate }
        Status={ status }
        HandleClick={ handleClick }
      /> }
      {data.products && <OrderDetailsTable
        Products={ data.products }
      /> }

      {data.products && renderTotalPrice() }
    </main>
  );
};

export default OrderDetailsSeller;
