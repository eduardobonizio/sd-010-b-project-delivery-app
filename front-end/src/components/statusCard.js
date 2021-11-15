import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import socket from '../utils/socket/socketClient';

export default function StatusCard({ order, type, linkDetail }) {
  const [status, setStatus] = useState(order.status);

  const dateNow = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    socket.on('changeStatus', (newStatus) => {
      if (newStatus.id === order.id) {
        setStatus(newStatus.status);
      }
    });
  }, [order.id]);
  return (
    <div>
      <Link to={ `${linkDetail}/${order.id}` }>
        <p
          data-testid={ `${type}_orders__element-order-id-${order.id}` }
        >
          {order.id}
        </p>
        <p
          data-testid={ `${type}_orders__element-delivery-status-${order.id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `${type}_orders__element-order-date-${order.id}` }
        >
          {dateNow(order.saleDate)}
        </p>
        <p
          data-testid={ `${type}_orders__element-card-price-${order.id}` }
        >
          {order.totalPrice.replace('.', ',')}
        </p>
        <p
          data-testid={ `${type}_orders__element-card-address-${order.id}` }
        >
          {`${order.deliveryAddress}`}
        </p>
      </Link>
    </div>
  );
}

StatusCard.propTypes = {
  linkDetail: PropTypes.string,
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
  type: PropTypes.string,
}.isRequired;
