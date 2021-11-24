import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import client from '../utils/socketClient';

const transito = 'Em Trânsito';
const entregue = 'Entregue';
const preparando = 'Preparando';
const pendente = 'Pendente';

const statusBtn = (role, status) => {
  if (role === 'customer' && status === pendente) {
    return true;
  }
  if (role === 'customer' && status === transito) {
    return false;
  }
  if (role === 'seller' && status === pendente) {
    return false;
  }
  return true;
};

const deliveryBtn = (role, status) => {
  if (role === 'seller' && (status === pendente
    || status === transito || status === entregue)) {
    return true;
  }
};

function OrderDetailHeader(props) {
  const { orderDetail, role } = props;
  const { id, seller, saleDate, status } = orderDetail;

  const [currentStatus, setCurrentStatus] = useState(status);

  /** SOURCE https://stackoverflow.com/questions/22719346/tolocaledatestring-is-not-returning-dd-mm-yyyy-format */
  const date = new Date(saleDate).toLocaleDateString('en-GB', {
    month: '2-digit', day: '2-digit', year: 'numeric' });

  const handleClick = (event) => {
    if (event.target.innerText === 'Preparar Pedido') {
      client.emit('preparando', { id, status: preparando });
    }
    if (event.target.innerText === 'Saiu para entrega') {
      client.emit('delivery', { id, status: transito });
    }
    if (event.target.innerText === 'Marcar como entregue') {
      client.emit('entregue', { id, status: entregue });
    }
  };

  useEffect(() => {
    client.on('refreshStatus', (newStatus) => {
      setCurrentStatus(newStatus);
    });
  }, []);

  return (
    <header>
      <p
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        { `000${id}` }
      </p>

      { role === 'customer' ? (
        <p
          data-testid={ `${role}_order_details__element-order-details-label-seller-name` }
        >
          { `P.Vend: ${seller.name}` }
        </p>)
        : null}
      <p
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { date }
      </p>
      <p
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      >
        { currentStatus }
      </p>
      <button
        data-testid={ role === 'customer' ? (
          `${role}_order_details__button-delivery-check`)
          : `${role}_order_details__button-preparing-check` }
        type="button"
        disabled={ statusBtn(role, currentStatus) }
        onClick={ (event) => handleClick(event) }
      >
        { role === 'customer' ? 'Marcar como entregue' : 'Preparar Pedido' }
      </button>
      { role === 'seller' ? (
        <button
          data-testid={ `${role}_order_details__button-dispatch-check` }
          type="button"
          disabled={ deliveryBtn(role, currentStatus) }
          onClick={ (event) => handleClick(event) }
        >
          Saiu para entrega
        </button>
      ) : null }
    </header>
  );
}

OrderDetailHeader.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.object).isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderDetailHeader;
