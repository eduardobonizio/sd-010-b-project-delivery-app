import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order, role }) {
  const { id, saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = order;

  const formatedDate = saleDate.split('T')[0].split('-').reverse().join('/');

  return (
    <Link to={ `/${role}/orders/${id}` }>
      <div data-testid={ `${role}_orders__element-order-id-${id}` }>
        {id}
      </div>
      <button
        type="button"
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
      >
        {status}
      </button>
      <div data-testid={ `${role}_orders__element-order-date-${id}` }>
        {formatedDate}
      </div>
      <div data-testid={ `${role}_orders__element-card-price-${id}` }>
        {`${totalPrice.replace('.', ',')}` }
      </div>
      {role === 'seller' ? (
        <div data-testid={ `seller_orders__element-card-address-${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </div>
      ) : null}
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryNumber: PropTypes.string,
    deliveryAddress: PropTypes.string,

  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderCard;
