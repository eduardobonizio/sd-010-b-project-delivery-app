import React from 'react';
// import PropTypes from 'prop-types';

const tableHead = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
  'Remover Item',
];
const orderTable = 'customer_checkout__element-order-table-item-number-';
const nameTable = 'customer_checkout__element-order-table-name-';
const quantityTable = 'customer_checkout__element-order-table-quantity-';
const unitPriceTable = 'customer_checkout__element-order-table-unit-price-';
const subTotalTable = 'customer_checkout__element-order-table-sub-total-';
const removeTable = 'customer_checkout__element-order-table-remove-';

function OrderTable() {
  // const { salesProducts: { price, quant, name, total } } = props;
  return (
    <table>
      <thead>
        <tr>
          {tableHead.map((item, index) => (
            <th key={ index }>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {salesProducts.map(({ price, quant, name, total }, index) => (
          <tr key={ index }>
            <td data-testid={ `${orderTable}${index}` }>{index + 1}</td>
            <td data-testid={ `${nameTable}${index}` }>{name}</td>
            <td data-testid={ `${quantityTable}${index}` }>{quant}</td>
            <td data-testid={ `${unitPriceTable}${index}` }>{productPrice(price)}</td>
            <td
              data-testid={ `${subTotalTable}${index}` }
            >
              {productPrice(total.toFixed(2))}
            </td>
            <td>
              <button
                type="button"
                onClick={ () => removeItem(name) }
                data-testid={ `${removeTable}${index}` }
              >
                Remover

              </button>
            </td>
          </tr>
        ))}
        <tr data-testid="customer_checkout__element-order-total-price">
          <td>
            Total: R$
            {productPrice(returnTotal().toFixed(2))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// OrderTable.propTypes = {
//   salesProducts: PropTypes.arrayOf(PropTypes).isRequired,
// };

export default OrderTable;
