import React from 'react';
import PropTypes from 'prop-types';

function Product({ index }) {
  return (
    <div>
      <span
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        1
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        Descrição do produto
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        5
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
      >
        R$ 2,00
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
      >
        R$ 10,00
      </span>
    </div>
  );
}

export default Product;

Product.propTypes = {
  index: PropTypes.number.isRequired,
};
