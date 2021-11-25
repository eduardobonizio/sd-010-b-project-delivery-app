import React from 'react';
import PropTypes from 'prop-types';

export default function SellerNavBar({ id, name, saleDate, status }) {
  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {id}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        {name}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        {saleDate}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </p>
      <button
        type="button"
        default
        data-testid="customer_order_details__button-delivery-check"
      >
        marcar como entregue
      </button>
    </div>
  );
}

SellerNavBar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;
