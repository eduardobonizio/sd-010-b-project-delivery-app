import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function SalesStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const takeOrders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };
    takeOrders();
  }, []);

  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div>
      <Header
        pageName="LISTA DE PEDIDOS"
        yourOrder="MEUS PEDIDOS"
        userName={ getStorage('user') && getStorage('user').name }
      />
      {orders.length && orders.map(({ id,
        status, saleDate, totalPrice,
        deliveryAddress, deliveryNumber }) => {
        console.log(orders);
        return (
          <Link to={ `/seller/orders/${id}` } key={ id }>
            <span
              data-testid={ `seller_orders__element-order-id-${id}` }
            >
              {id}
            </span>
            <span
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              {status}
            </span>
            <span
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {date(saleDate)}
            </span>
            <span
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {totalPrice}
            </span>
            <span
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              {`${deliveryAddress}, ${deliveryNumber}`}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
