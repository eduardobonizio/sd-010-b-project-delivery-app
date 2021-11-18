import React from 'react';
import PropType from 'prop-types';
import { useCustomer } from '../../../../hooks/useCustomer';

function Sale({ product, index }) {
  const { productId, name, quantity, unitPrice, subTotal } = product;
  const { handleRemoveItemCart } = useCustomer();
  return (
    <div>
      <span
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { productId }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </span>
      <span
        data-testid={ `cutomer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </span>
      <span>
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { unitPrice }
        </span>
      </span>
      <span>
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { subTotal }
        </span>
      </span>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        type="button"
        onClick={ () => handleRemoveItemCart(productId) }
      >
        REMOVER
      </button>
    </div>
  );
}

export default Sale;

Sale.propTypes = {
  product: PropType.shape({
    productId: PropType.number.isRequired,
    name: PropType.string.isRequired,
    quantity: PropType.number.isRequired,
    unitPrice: PropType.string.isRequired,
    subTotal: PropType.string.isRequired,
  }).isRequired,
  index: PropType.number.isRequired,
};
