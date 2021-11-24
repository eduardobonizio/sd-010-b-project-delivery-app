import React from 'react';
import Proptypes from 'prop-types';
import addZeroes from '../helper/functions/addZeroes';

export default function ItemDetails({ order, index }) {
  const { name, quantity, price } = order;

  return (
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        { price }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        { addZeroes(price * quantity) }
      </td>
    </tr>
  );
}

ItemDetails.propTypes = {
  order: Proptypes.shape({
    name: Proptypes.string.isRequired,
    quantity: Proptypes.number.isRequired,
    price: Proptypes.string.isRequired,
  }).isRequired,
  index: Proptypes.number.isRequired,
};
