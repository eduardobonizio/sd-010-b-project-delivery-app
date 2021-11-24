/* eslint-disable react/prop-types */
import React from 'react';

function renderProductCards({ id, name, price, quantity }) {
  return (
    <li key={ id }>
      {id}
      {name}
      {price}
      {quantity}
    </li>
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
