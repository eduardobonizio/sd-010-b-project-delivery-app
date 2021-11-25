import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddZeroes from '../../helper/functions/addZeroes';

function OrderSeller({ order }) {
  console.log(order);
  const { id, saleDate, totalPrice, status, deliveryAddress, deliveryNumber } = order;
  return (
    <Link to={ `seller/orders/${id}` }>
      <div>
        <p>
          Pedido
        </p>
        <p
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          {id}
        </p>
        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          {
            moment(saleDate).format('DD/MM/YYYY')
          }
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          {AddZeroes(Number(totalPrice))}
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          {`${deliveryAddress}. ${deliveryNumber}`}
        </p>
      </div>
    </Link>
  );
}

OrderSeller.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderSeller;
