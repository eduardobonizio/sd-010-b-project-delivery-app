import React from 'react';

function TableOrdersCustomer() {
  const id = 1;
  return (
    <table>
      <tr>
        <td data-testid={ `customer_orders__element-order-id-${id}` }>0001</td>
        <td data-testid={ `customer_orders__element-delivery-status-${id}` }>Entregue</td>
        <td>
          <tr data-testid={ `customer_orders__element-order-date-${id}` }>20/11/2021</tr>
          <tr>R$ 23,80</tr>
        </td>
      </tr>
    </table>
  );
}

export default TableOrdersCustomer;
