/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/ProductsComponents/Header';
import { setOrdersStatus, getAllOrdersSaleId } from '../../../services/api';
import OrderDetails from '../../../components/OrderDetailsSeller/OrderDetailsSeller';
import OrderDetailsTable from '../../../components/OrderDetailsSeller/OrderDetailsTable';
import addZeroes from '../../../helper/functions/addZeroes';

const OrderDetailsSeller = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Pendente');

  // const [totalPrice, setTotalPrice] = useState([]);
  const { id } = useParams();
  const fetchOrders = async () => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // const response = dataSeller.filter((el) => el.id === Number(id));
    const response = await getAllOrdersSaleId(Number(id));

    setData(response);

    console.log(response, 'data cheiroso', data.id, id);
  };
  console.log(id, 'params');

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
