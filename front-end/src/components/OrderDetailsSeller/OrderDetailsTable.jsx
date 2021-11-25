import React from 'react';
import Proptypes from 'prop-types';
import addZeroes from '../../helper/functions/addZeroes';

const TEST_ID59 = 'seller_order_details__element-order-table-item-number-';

const OrderDetailsTable = ({ Products }) => {
  console.log('cheetos', Products);
  return (
    <div>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      {
        Products.map(({ id, name, price, SalesProducts: { quantity } }, index) => (
          <tr key={ index }>
            <td
              data-testid={ `${TEST_ID59}${index}` }
            >
              {id}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {price.replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {addZeroes((price * quantity))}
            </td>
          </tr>
        ))
      }
    </div>
  );
};

OrderDetailsTable.propTypes = {
  Products: Proptypes.shape.isRequired,
};

export default OrderDetailsTable;
