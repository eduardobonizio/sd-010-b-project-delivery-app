import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatedDate } from '../helpers/functions';

export default function OrderCard({ order }) {
  return (
    <Link className="border d-flex w-50" to={ `/customer/orders/${order.id}` }>
      <div className="m-4">
        <p>Pedido</p>
        <p
          data-testid={ `customer_orders__element-order-id-${order.id}` }
        >
          { order.id }
        </p>
      </div>
      <div className="d-flex justify-content-between m-4">
        <p
          data-testid={ `customer_orders__element-delivery-status-${order.id}` }
        >
          { order.status }
        </p>
        <div className="mx-4">
          <p
            data-testid={ `customer_orders__element-order-date-${order.id}` }
          >
            { formatedDate(order.date) }
          </p>
          <p>
            <span
              data-testid={ `customer_orders__element-card-price-${order.id}` }
            >
              { order.price }
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
