import React from 'react';
import Proptypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './css/OrderDetailsTable.css';

function OrderDetailsTable({ products, totalPrice }) {
  return (
    <Table responsive hover className="table-format">
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
        { products.map((entry) => (
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
        <tr>
          <td
            colSpan="5"
            data-testid="customer_order_details__element-order-total-price"
            className="total-price"
          >
            { `Total: R$${totalPrice.split('.').join(',')}` }
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

OrderDetailsTable.propTypes = {
  products: Proptypes.arrayOf(Proptypes.any).isRequired,
  totalPrice: Proptypes.string.isRequired,
};

export default OrderDetailsTable;
