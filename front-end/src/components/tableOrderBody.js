import React from 'react';
import PropTypes from 'prop-types';

const DATA_TESTID = {
  itemNumber: 'customer_checkout__element-order-table-item-number-',
  tableName: 'customer_checkout__element-order-table-name-',
  tableQuantity: 'customer_checkout__element-order-table-quantity-',
  unitPrice: 'customer_checkout__element-order-table-unit-price-',
  subTotal: 'customer_checkout__element-order-table-sub-total-',
  tableRemove: 'customer_checkout__element-order-table-remove-',
};

export default function TableOrderBody({ cartItems }) {
  return (
    <tbody>
      {cartItems.map(({ name, price, quantity }, idx) => (
        <tr key={ idx }>
          <td data-testid={ `${DATA_TESTID.itemNumber}${idx}` }>
            {idx + 1}
          </td>
          <td data-testid={ `${DATA_TESTID.tableName}${idx}` }>
            {name}
          </td>
          <td data-testid={ `${DATA_TESTID.tableQuantity}${idx}` }>
            {quantity}

          </td>
          <td data-testid={ `${DATA_TESTID.unitPrice}${idx}` }>
            {price.replace('.', ',')}

          </td>
          <td data-testid={ `${DATA_TESTID.subTotal}${idx}` }>
            {(quantity * price).toFixed(2).replace('.', ',')}
          </td>
          <td>
            <button
              type="button"
              data-testid={ `${DATA_TESTID.tableRemove}${idx}` }
            >
              Remover
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

TableOrderBody.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
};
