import React from 'react';
// import PropTypes from 'prop-types';

function OrderDetailsTbody() {
  const items = [{ id: 1, name: 'cerveja', quantity: 2, price: '2.99', total: '5.00' }];

  return (
    <tbody>
      {
        items.map((prod, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {prod.id}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              {prod.name}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {prod.quantity}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {prod.price.replace(/\./, ',') }
            </td>
            <td
              data-testid={ `customer_order_details__element-order-total-price-${index}` }
            >
              {prod.total.replace(/\./, ',')}
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

// Tbody.propTypes = {
//   getTotal: PropTypes.func.isRequired,
// };

export default OrderDetailsTbody;
