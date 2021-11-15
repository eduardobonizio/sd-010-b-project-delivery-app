import PropTypes from 'prop-types';
import React from 'react';

export default function TableProducts({ products, type }) {
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        {products[0].products.map((el, index) => (
          <tr key={ el.id }>
            <th
              data-testid={
                `${type}_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </th>
            <th
              data-testid={
                `${type}_order_details__element-order-table-name-${index}`
              }
            >
              {el.name}
            </th>
            <th
              data-testid={
                `${type}_order_details__element-order-table-quantity-${index}`
              }
            >
              {products[1][index].quantity}
            </th>
            <th
              data-testid={
                `${type}_order_details__element-order-table-unit-price-${index}`
              }
            >
              {el.price}
            </th>
            <th
              data-testid={
                `${type}_order_details__element-order-table-sub-total-${index}`
              }
            >
              {(parseFloat(products[1][index].quantity)
              * parseFloat(el.price).toFixed(2))}
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

TableProducts.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
