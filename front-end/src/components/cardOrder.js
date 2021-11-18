import React from 'react';
import PropTypes from 'prop-types';

function CardOrder({ sale }) {
  const { id, total_price: totalPrice, sale_date: saleDate, status } = sale;
  return (
    <div key={ id }>
      <h5 data-testid={ `customer_orders__element-order-${id}` }>{`Pedido ${id}`}</h5>
      <h1 data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</h1>
      <h3 data-testid={ `customer_orders__element-order-date-${id}` }>{saleDate}</h3>
      <h3>{ totalPrice }</h3>
    </div>
  );
}

CardOrder.propTypes = {
  sale: PropTypes.shape({
    status: PropTypes.string,
    sale_date: PropTypes.instanceOf(Date),
    total_price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default CardOrder;
