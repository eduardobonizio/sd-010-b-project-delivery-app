import React from 'react';
import PropTypes from 'prop-types';
import { formatSaveAndRenderPrice } from '../../../../helpers/functions';

function Product({ index, product }) {
  const { name, quantity, unitPrice, subTotal } = product;
  return (
    <tr>
      <td
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        { (index + 1) }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td>
        R$
        <span
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          { formatSaveAndRenderPrice(unitPrice) }
        </span>
      </td>
      <td>
        R$
        <span
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          { formatSaveAndRenderPrice(subTotal.toFixed(2)) }
        </span>
      </td>
    </tr>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unitPrice: PropTypes.string.isRequired,
    subTotal: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
