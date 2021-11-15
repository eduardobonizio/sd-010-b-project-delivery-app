import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/productContext';

const DATA_TESTID = {
  itemNumber: 'customer_checkout__element-order-table-item-number-',
  tableName: 'customer_checkout__element-order-table-name-',
  tableQuantity: 'customer_checkout__element-order-table-quantity-',
  unitPrice: 'customer_checkout__element-order-table-unit-price-',
  subTotal: 'customer_checkout__element-order-table-sub-total-',
  tableRemove: 'customer_checkout__element-order-table-remove-',
};

export default function TableOrderBody({ cartItems }) {
  const { removeCartItem } = useContext(ProductsContext);

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
              onClick={ () => removeCartItem({ name, price, quantity }) }
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
