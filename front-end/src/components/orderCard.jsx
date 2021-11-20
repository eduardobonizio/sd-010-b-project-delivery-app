import React from 'react';
import PropTypes from 'prop-types';

function OrderCart(props) {
  const { order } = props;
  const { id: orderNum, saleDate, totalPrice, status } = order;

  const convertDate = (dateComplete) => {
    const onlyDate = dateComplete.split('T')[0];
    const [year, month, day] = onlyDate.split('-');
    return `${day}/${month}/${year}`;
  };

  const convertPrice = (price) => {
    const convert = price.replace(/\./, ',');
    return convert;
  };

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
          {convertDate(saleDate)}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${orderNum}` }
        >
          {convertPrice(totalPrice)}
        </p>
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
