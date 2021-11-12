import React from 'react';
import Proptypes from 'prop-types';
import { Context } from '../provider/Provider';

function CheckoutProduct({ orderItem, index }) {
  const { name, price, quantity } = orderItem;
  const { removeProduct } = React.useContext(Context);
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {price * quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button
          type="button"
          onClick={ () => removeProduct(index) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutProduct.propTypes = {
  orderItem: Proptypes.shape({
    name: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    quantity: Proptypes.number.isRequired,
  }).isRequired,
  index: Proptypes.number.isRequired,
};

export default CheckoutProduct;
