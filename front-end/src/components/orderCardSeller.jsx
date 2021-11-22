import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCart(props) {
  const { order } = props;
  const {
    id: orderNum,
    saleDate,
    totalPrice,
    status,
    deliveryAddress,
    deliveryNumber,
  } = order;

  const convertDate = (dateComplete) => {
    const onlyDate = dateComplete.split('T')[0];
    const [year, month, day] = onlyDate.split('-');
    return `${day}/${month}/${year}`;
  };

  const convertPrice = (price) => {
    const convert = price.replace(/\./, ',');
    return convert;
  };

  console.log(order);

  return (
    <div>
      <Link to={ `/seller/orders/${orderNum}` }>
        <div>
          <h3
            data-testid={ `seller_orders__element-order-id-${orderNum}` }
          >
            {`Pedido ${orderNum}`}
          </h3>
        </div>
        <div>
          <h3
            data-testid={ `seller_orders__element-delivery-status-${orderNum}` }
          >
            {status}
          </h3>
        </div>
        <div>
          <p
            data-testid={ `seller_orders__element-order-date-${orderNum}` }
          >
            {convertDate(saleDate)}
          </p>
          <p
            data-testid={ `seller_orders__element-card-price-${orderNum}` }
          >
            {convertPrice(totalPrice)}
          </p>
          <p data-testid={ `seller_orders__element-card-address-${orderNum}` }>
            {`${deliveryAddress} ${deliveryNumber}`}
          </p>
        </div>
      </Link>
    </div>
  );
}

OrderCart.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCart;
