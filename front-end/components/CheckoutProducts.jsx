// falta onClick para remover o item do carrinho de compras

import React from 'react';
import Proptypes from 'prop-types';
import Provider from '../../provider/Provider';

function CheckoutProduct({orderItem, index}) {
 const {name, price, quantity} = orderItem;
  return (
    <tr>
      <td
        data-testid={`customer_checkout__element-order-table-item-number-${index}`}
      >
        {index + 1}
      </td>
      <td
        data-testid={`customer_checkout__element-order-table-name-${index}`}
      >
        {name}
      </td>
      <td
        data-testid={`customer_checkout__element-order-table-quantity-${index}`}
      >
        {quantity}
      </td>
      <td
        data-testid={`customer_checkout__element-order-table-unit-price-${index}`}
      >
        {price}
      </td>
      <td
        data-testid={`customer_checkout__element-order-table-sub-total-${index}`}
      >
        {price * quantity}
      </td>
      <td
        data-testid={`customer_checkout__element-order-table-remove-${index}`}
      >
        <button
          type="button"
          onClick={() => {}}
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
