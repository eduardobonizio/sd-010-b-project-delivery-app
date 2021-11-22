import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = order;

  const newDate = saleDate.split('T')[0].split('-').reverse().join('/');

  return (
    <Link to={ `/seller/orders/${id}` }>
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        {id}
      </div>
      <button
        type="button"
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        {status}
      </button>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        {newDate}
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        {`${totalPrice.replace('.', ',')}` }
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {`${deliveryAddress}, ${deliveryNumber}`}
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryNumber: PropTypes.string,
    deliveryAddress: PropTypes.string,

  }).isRequired,
};

export default OrderCard;
