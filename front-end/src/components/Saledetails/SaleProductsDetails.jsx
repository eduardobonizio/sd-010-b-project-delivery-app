/* eslint-disable react/prop-types */
import React from 'react';
import test from '../../utils/dataTestIdDict';

function renderProductCards({ id, name, price, quantity }) {
  return (
    <div key={ id }>
      Item
      <div data-testid={ `${test.dataTestId41}-${id}` }>{id}</div>
      Descrição
      <div data-testid={ `${test.dataTestId42}-${name}` }>{name}</div>
      Quantitdade
      <div data-testid={ `${test.dataTestId42}-${quantity}` }>{quantity}</div>
      Valor unitário
      <div data-testid={ `${test.dataTestId42}-${price}` }>{price}</div>
      Sub-total
      <div
        data-testid={
          `${test.dataTestId42}-${(quantity * price).toFixed(2)}`
        }
      >
        {(quantity * price).toFixed(2)}
      </div>
    </div>
  );
}

function SaleProductsDetails({ products }) {
  return (
    <ul>
      {
        products.map(renderProductCards)
      }
    </ul>
  );
}

export default SaleProductsDetails;
