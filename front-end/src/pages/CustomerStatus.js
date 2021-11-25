import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);

  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    const takeOrders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };
    takeOrders();
  }, []);

  return (

    <div>
      <Header
        pageName="LISTA DE PEDIDOS"
        yourOrder
        userName={ getStorage('user') && getStorage('user').name }
      />

      {orders.length && orders.map(({ id, status, saleDate, totalPrice }) => {
        console.log(id);
        return (
          <Link to={ `/customer/orders/${id}` } key={ id }>
            <span
              data-testid={ `customer_orders__element-order-id-${id}` }
            >
              {id}
            </span>
            <span
              data-testid={ `customer_orders__element-delivery-status-${id}` }
            >
              {status}
            </span>
            <span
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              {date(saleDate)}
            </span>
            <span
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              {totalPrice.replace(/\./, ',')}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
