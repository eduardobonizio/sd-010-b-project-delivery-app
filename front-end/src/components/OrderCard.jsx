import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice } = order;

  const newDate = saleDate.split('T')[0].split('-').reverse().join('/');

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        {id}
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status}
      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        {newDate}
      </div>
      <div data-testid={ `customer_orders__element-card-price-${id}` }>
        {`${totalPrice.replace('.', ',')}` }
      </div>
    </Link>
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
