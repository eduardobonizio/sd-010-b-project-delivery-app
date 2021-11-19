import React from 'react';
import PropType from 'prop-types';
import { formatSaveAndRenderPrice } from '../../../../helpers/functions';

function Sale({ product, index }) {
  const { name, quantity, unitPrice, subTotal } = product;

  return (
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        { (index + 1) }
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
      <td>
        R$
        <span
          data-testid={ `
            customer_order_details__element-order-table-unit-price-${index}
          ` }
        >
          { formatSaveAndRenderPrice(unitPrice) }
        </span>
      </td>
      <td>
        R$
        <span
          data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
        >
          { formatSaveAndRenderPrice(subTotal.toFixed(2)) }
        </span>
      </td>
    </tr>
  );
}

export default Sale;

Sale.propTypes = {
  product: PropType.shape({
    name: PropType.string.isRequired,
    quantity: PropType.number.isRequired,
    unitPrice: PropType.string.isRequired,
    subTotal: PropType.number.isRequired,
  }).isRequired,
  index: PropType.number.isRequired,
};
