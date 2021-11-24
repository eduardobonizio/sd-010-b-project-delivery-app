import React from 'react';
import Proptypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../pages/css/Products.css';

function OrderDetailsTable({ order }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { order.map((entry) => (
          <tr key={ entry.id }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${entry.id}`
              }
            >
              { entry.id }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${entry.id}`
              }
            >
              { entry.name }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${entry.id}`
              }
            >
              { entry.SalesProduct.quantity }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${entry.id}`
              }
            >
              R$
              { entry.price.split('.').join(',') }
            </td>
            <td>
              R$
              {
                (parseFloat(entry.price)
              * entry.SalesProduct.quantity).toFixed(2).split('.').join(',')
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

OrderDetailsTable.propTypes = {
  order: Proptypes.arrayOf(Proptypes.any).isRequired,
};

export default OrderDetailsTable;
