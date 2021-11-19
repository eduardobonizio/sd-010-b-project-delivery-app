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
    <tbody className="text-lg">
      {cartItems.map(({ name, price, quantity }, idx) => (
        <tr key={ idx } className="border-t-8 border-b-8 border-white bg-yellow-color">
          <td
            className="py-2 rounded-l-lg"
            data-testid={ `${DATA_TESTID.itemNumber}${idx}` }
          >
            {idx + 1}
          </td>
          <td className="px-0" data-testid={ `${DATA_TESTID.tableName}${idx}` }>
            <span className="inline-block w-4/5 px-10 py-1 bg-white">
              {name}
            </span>
          </td>
          <td data-testid={ `${DATA_TESTID.tableQuantity}${idx}` }>
            {quantity}

          </td>
          <td data-testid={ `${DATA_TESTID.unitPrice}${idx}` }>
            <span className="inline-block w-4/5 px-10 py-1 bg-white">
              {price.replace('.', ',')}
            </span>
          </td>
          <td className="rounded-r-lg" data-testid={ `${DATA_TESTID.subTotal}${idx}` }>
            <span className="inline-block w-4/5 px-10 py-1 bg-white">
              {(quantity * price).toFixed(2).replace('.', ',')}
            </span>
          </td>
          <td className="bg-white w-60">
            <button
              className="flex items-center justify-center w-32 p-2 rounded-md ml-14
              text-yellow-color bg-dark-color"
              type="button"
              onClick={ () => removeCartItem({ name, price, quantity }) }
              data-testid={ `${DATA_TESTID.tableRemove}${idx}` }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0
                  002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012
                  0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1
                  1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
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
