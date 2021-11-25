import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatedDate } from '../../../../helpers/functions';

export default function OrderCard({ order }) {
  const address = `${order.deliveryAddress}, ${order.deliveryNumber}`;
  return (
    <Link className="border d-flex w-50" to={ `/seller/orders/${order.id}` }>
      <div className="m-4">
        <p>Pedido</p>
        <p
          data-testid={ `seller_orders__element-order-id-${order.id}` }
        >
          { order.id }
        </p>
      </div>
      <div className="d-flex justify-content-between m-4">
        <p
          data-testid={ `seller_orders__element-delivery-status-${order.id}` }
        >
          { order.status }
        </p>
        <div className="mx-4">
          <p
            data-testid={ `seller_orders__element-order-date-${order.id}` }
          >
            { formatedDate(new Date(order.saleDate)) }
          </p>
          <p>
            R$
            <span
              data-testid={ `seller_orders__element-card-price-${order.id}` }
            >
              { order.totalPrice }
            </span>
          </p>
          <p>
            <span
              data-testid={ `seller_orders__element-card-price-${order.id}` }
            >
              { address }
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
    saleDate: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
