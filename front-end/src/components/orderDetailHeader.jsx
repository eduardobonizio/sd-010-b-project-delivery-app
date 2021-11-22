import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailHeader(props) {
  const { orderDetail } = props;
  const { id, seller, saleDate, status } = orderDetail;
  const date = new Date(saleDate).toLocaleDateString();

  return (
    <header>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `000${id}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${seller.name}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { date }
      </p>
      <p
        data-testid="
          customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
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
