import React from 'react';
import PropTypes from 'prop-types';

function CheckoutList(props) {
  const { item } = props;
  const { id, name, qty, price, total } = item;
  return (
    <>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${id}` }>
        {id}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${id}` }>
        {name}
      </td>
      <td data-testid={ `cutomer_checkout__element-order-table-quantity-${id}` }>
        {qty}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }>
        {`R$ ${price}`}
      </td>
      <td
        className="total"
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        {`R$ ${total}`}
      </td>
    </>
  );
}

CheckoutList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

export default CheckoutList;
