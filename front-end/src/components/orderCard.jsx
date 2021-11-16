import React from 'react';
import PropTypes from 'prop-types';

function OrderCart(props) {
  const { orderNum, orderDate, orderTotal, orderStatus } = props;

  return (
    <div>
      <div>
        <h3>{`Pedido ${orderNum}`}</h3>
      </div>
      <div>
        <h3>{orderStatus}</h3>
      </div>
      <div>
        <p>{orderDate}</p>
        <p>{orderTotal}</p>
      </div>
    </div>
  );
}

OrderCart.propTypes = {
  orderNum: PropTypes.number.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrderCart;
