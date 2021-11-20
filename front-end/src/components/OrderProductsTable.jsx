/* eslint-disable react/prop-types */
import React from 'react';
import tableTitles from '../services/orderTableTitles';

// eslint-disable-next-line react/prop-types
function OrderProductsTable({ products }) {

  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((title, index) => <th key={ index }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={ product.id }>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.SalesProduct.quantity}</td>
            <td>{product.price.replace('.', ',')}</td>
            <td>
              {(product.price * product.SalesProduct.quantity).toFixed(2)
                .replace('.', ',')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderProductsTable;
