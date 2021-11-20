import React from 'react';
import PropTypes from 'prop-types';

function Product({ index }) {
  return (
    <tr>
      <td
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        1
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        Descrição do produto
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        5
      </td>
      <td>
        R$
        <span
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          2,00
        </span>
      </td>
      <td>
        R$
        <span
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          10,00
        </span>
      </td>
    </tr>
  );
}

export default Product;

Product.propTypes = {
  index: PropTypes.number.isRequired,
};
