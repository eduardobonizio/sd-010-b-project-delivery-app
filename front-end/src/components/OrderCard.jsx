import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  return (
    <div>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        {id}
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status}
      </div>
      <div>
        {saleDate}
      </div>
      <div>
        {`R$ ${totalPrice}`}
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default OrderCard;
