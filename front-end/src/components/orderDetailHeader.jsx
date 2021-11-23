import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailHeader(props) {
  const { orderDetail, role } = props;
  const { id, seller, saleDate, status } = orderDetail;
  /** SOURCE https://stackoverflow.com/questions/22719346/tolocaledatestring-is-not-returning-dd-mm-yyyy-format */
  const date = new Date(saleDate).toLocaleDateString('en-GB', {
    month: '2-digit', day: '2-digit', year: 'numeric' });
  const statusBtn = () => role === 'customer';
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
        { status }
      </p>
      <button
        data-testid={ role === 'customer' ? (
          `${role}_order_details__button-delivery-check`)
          : `${role}_order_details__button-preparing-check` }
        type="button"
        disabled={ statusBtn() }
      >
        { role === 'customer' ? 'Marcar como entregue' : 'Preparar Pedido' }
      </button>
      { role === 'seller' ? (
        <button
          data-testid={ `${role}_order_details__button-dispatch-check` }
          type="button"
          disabled
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
