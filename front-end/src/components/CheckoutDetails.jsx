import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CheckoutDetails({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        Detalhe do Pedido
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      </div>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{saleDate}</p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>{totalPrice}</p>
    </Link>
  );
}

CheckoutDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutDetails;
