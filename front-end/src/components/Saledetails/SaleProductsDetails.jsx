import React from 'react';
import PropTypes from 'prop-types';
import test from '../../utils/dataTestIdDict';

function renderProductCards({ id, name, price, quantity }) {
  return (
    <div key={ id }>
      Item
      <div data-testid={ `${test.dataTestId41}` }>{id}</div>
      Descrição
      <div data-testid={ `${test.dataTestId42}` }>{name}</div>
      Quantitdade
      <div data-testid={ `${test.dataTestId43}` }>{quantity}</div>
      Valor unitário
      <div data-testid={ `${test.dataTestId44}` }>{price}</div>
      Sub-total
      <div
        data-testid={
          `${test.dataTestId45}-${(quantity * price).toFixed(2)}`
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

SaleProductsDetails.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default SaleProductsDetails;
