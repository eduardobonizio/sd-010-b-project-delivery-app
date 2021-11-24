import React, { useContext } from 'react';
import Logincontext from '../../context/LoginContext';

export default function TableItens() {
  const { arrayProducts } = useContext(Logincontext);

  return (
    <div>
      { arrayProducts.map(({ name, quantity, price, subTotal }, index) => (
        <div
          key={ index }
        >
          <span
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            { `${index + 1}   ` }
          </span>

          <span
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            { `${name}   ` }
          </span>

          <span
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            { `${quantity}  ` }
          </span>

          <span
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            { `${price.replace('.', ',')}  ` }
          </span>

          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            { String(subTotal.toFixed(2)).replace('.', ',') }
          </span>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            Remover
          </button>
        </div>
      )) }
    </div>
  );
}
