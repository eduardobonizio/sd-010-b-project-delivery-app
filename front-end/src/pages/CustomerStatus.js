import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => getOrders().then(({ data }) => {
    setOrders(data);
  }), []);

  return (

    <div>
      <Header
        pageName="LISTA DE PEDIDOS"
        yourOrder
        userName={ getStorage('user').name }
      />

      {orders.length && orders.map(({ id, status, saleData, totalPrice }) => {
        console.log(id);
        return (
          <Link to={ `/customer/orders/${id}` } key={ id }>
            <span
              data-testid={ `customer_products__card-orderId-${id}` }
            >
              {id}
            </span>
            <span
              data-testid={ `customer_products__card-deliveryStatus-${id}` }
            >
              {status}
            </span>
            <span
              data-testid={ `customer_products__element-order-date-${id}` }
            >
              {saleData}
            </span>
            <span
              data-testid={ `customer_products__card-price-${id}` }
            >
              {totalPrice}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
