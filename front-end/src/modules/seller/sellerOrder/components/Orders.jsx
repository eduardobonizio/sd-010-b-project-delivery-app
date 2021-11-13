import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Orders({ id, status, date, price, address, index }) {
  const history = useHistory();

  function handleRedirect() {
    history.push(`/seller/orders/${id}`);
  }

  return (
    <button type="button" onClick={ handleRedirect }>
      <div>
        <p>pedidos</p>
        <p data-testid={ `seller_orders__element-order-id-${index}` }>{ id }</p>
      </div>
      <div>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${index}` }>
            { status }
          </p>
          <div>
            <p data-testid={ `seller_orders__element-order-date-${index}` }>{ date }</p>
            <p data-testid={ `seller_orders__element-card-price-${index}` }>
              R$
              { price }
            </p>
          </div>
        </div>
        <p data-testid={ `seller_orders__element-card-price--${index}` }>{ address }</p>
      </div>
    </button>
  );
}

Orders.propTypes = {
  index: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Orders;
