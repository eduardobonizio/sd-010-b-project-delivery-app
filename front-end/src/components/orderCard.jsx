import React from 'react';
import PropTypes from 'prop-types';

function OrderCart(props) {
  const { order } = props;
  const { id: orderNum, orderDate, orderTotal, orderStatus } = order;

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
          {orderStatus}
        </h3>
      </div>
      <div>
        <p
          data-testid={ `customer_orders__element-order-date-${orderNum}` }
        >
          {orderDate}
        </p>
        <p>{orderTotal}</p>
      </div>
    </div>
  );
}

OrderCart.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    orderNum: PropTypes.number.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderTotal: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCart;
