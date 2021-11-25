import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailHeader(props) {
  const { orderDetail } = props;
  const { id, seller, saleDate, status } = orderDetail;
  /** SOURCE https://stackoverflow.com/questions/22719346/tolocaledatestring-is-not-returning-dd-mm-yyyy-format */
  const date = new Date(saleDate).toLocaleDateString('en-GB', {
    month: '2-digit', day: '2-digit', year: 'numeric' });

  return (
    <header className="main-detail-table">
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `Número do pedido: 000${id}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `Pessoa Vendedora: ${seller.name}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { `Data do pedido: ${date}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { `Status: ${status}` }
      </p>
      <button
        className="check-delivery-button"
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        Marcar como entregue
      </button>
    </header>
  );
}

OrderDetailHeader.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default OrderDetailHeader;
