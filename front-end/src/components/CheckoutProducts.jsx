// container de detalhes do pedido
import React from 'react';
import Proptypes from 'prop-types';
import { Context } from '../provider/Provider';
import addZeroes from '../helper/functions/addZeroes';

function CheckoutProduct({ order, index }) {
  const { name, price, quantity } = order;
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
        {price.replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {addZeroes(price * quantity)}
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
  order: Proptypes.shape({
    name: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    quantity: Proptypes.number.isRequired,
  }).isRequired,
  index: Proptypes.number.isRequired,
};

export default CheckoutProduct;
