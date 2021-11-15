import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import socket from '../utils/socket/socketClient';

export default function OrderNavBar({ order, type }) {
  const [status, setStatus] = useState(order.status);

  const changeStatusFunc = (newStatus) => {
    const { id } = order;
    const statusObject = { id, status: newStatus };
    socket.emit('changeStatus', statusObject);
  };

  const dateNow = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    socket.on('changeStatus', (newStatus) => setStatus(newStatus.status));
  }, []);
  return (
    <div>
      <p
        data-testid={
          `${type}_order_details__element-order-details-label-order-id`
        }
      >
        {order.id}
      </p>
      <p
        data-testid={
          `${type}_order_details__element-order-details-label-order-date`
        }
      >
        {dateNow(order.saleDate)}
      </p>
      {type === 'customer' && (
        <p
          data-testid={
            `${type}_order_details__element-order-details-label-seller-name`
          }
        >
          {order.sellerName}
        </p>)}
      <p
        data-testid={
          `${type}_order_details__element-order-details-label-delivery-status`
        }
      >
        {status}
      </p>
      {type === 'customer' && (
        <button
          data-testid="customer_order_details__button-delivery-check"
          disabled={ status !== 'Em Trânsito' }
          onClick={ () => changeStatusFunc('Entregue') }
          type="button"
        >
          Entregue
        </button>)}
      {type === 'seller' && (
        <div>
          <button
            data-testid="seller_order_details__button-preparing-check"
            disabled={ status !== 'Pendente' }
            onClick={ () => changeStatusFunc('Preparando') }
            type="button"
          >
            Preparar pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ status !== 'Preparando' }
            onClick={ () => changeStatusFunc('Em Trânsito') }
            type="button"
          >
            Saiu para entrega
          </button>
        </div>
      )}
    </div>);
}

OrderNavBar.propTypes = {
  type: PropTypes.string,
  order: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }),
}.isRequired;
