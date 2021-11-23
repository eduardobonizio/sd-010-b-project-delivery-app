import React from 'react';
import PropTypes from 'prop-types';

function SellerOrderHeader(props) {
  const { orderDetail } = props;
  const { id, saleDate, status } = orderDetail;
  /** SOURCE https://stackoverflow.com/questions/22719346/tolocaledatestring-is-not-returning-dd-mm-yyyy-format */
  const date = new Date(saleDate).toLocaleDateString('en-GB', {
    month: '2-digit', day: '2-digit', year: 'numeric' });

  return (
    <header>
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `000${id}` }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { date }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled
      >
        SAIU PARA ENTREGA
      </button>
    </header>
  );
}

SellerOrderHeader.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SellerOrderHeader;
