import PropTypes from 'prop-types';
import React from 'react';
import changeStatusFunc from '../helper/asynFunc/changeStatus';

export default function OrderNavBar({ order, type }) {
  const dateNow = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
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
        {order.status}
      </p>
      {type === 'customer' && (
        <button
          data-testid="customer_order_details__button-delivery-check"
          disabled
          onClick={ () => changeStatusFunc('Entregue') }
          type="button"
        >
          Entregue
        </button>)}
      {type === 'seller' && (
        <div>
          <button
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => changeStatusFunc('Preparando') }
            type="button"
          >
            Preparar pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => changeStatusFunc('Em trânsito') }
            disabled
            type="button"
          >
            Saiu para entrega
          </button>
        </div>
      )}
    </div>
  );
}

OrderNavBar.propTypes = {
  type: PropTypes.string,
  order: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }),
}.isRequired;
