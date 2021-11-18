import React from 'react';
import PropTypes from 'prop-types';

function OrderVendedor({ order }) {
  console.log('order :', order);
  const { id, saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = order;

  return (
    <div>
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        {id}
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${status}` }>
        {status}
      </div>
      <div data-testid={ `seller_orders__element-order-date-${saleDate}` }>
        {saleDate}
      </div>
      <div data-testid={ `seller_orders__element-card-price-${totalPrice}` }>
        {`R$ ${totalPrice}`}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${deliveryAddress}` }>
        {`${deliveryAddress}, ${deliveryNumber}`}
      </div>
    </div>
  );
}

OrderVendedor.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }).isRequired,
};

export default OrderVendedor;
