import React from 'react';
import PropTypes from 'prop-types';

function OrderCart(props) {
  const { order } = props;
  const { id: orderNum, saleDate, totalPrice, status } = order;

  return (
    <div>
      <div>
        <h3
          data-testid={ `customer_orders__element-order-id-${orderNum}` }
        >
          {`Pedido ${orderNum}`}
        </h3>
      </div>
      <div>
        <h3
          data-testid={ `customer_orders__element-delivery-status-${orderNum}` }
        >
          {status}
        </h3>
      </div>
      <div>
        <p
          data-testid={ `customer_orders__element-order-date-${orderNum}` }
        >
          {saleDate}
        </p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
}

OrderCart.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCart;
