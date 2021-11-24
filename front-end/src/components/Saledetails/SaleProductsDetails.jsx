import React from 'react';
import PropTypes from 'prop-types';
import test from '../../utils/dataTestIdDict';

function renderProductCards({ id, name, price, quantity }, index) {
  return (
    <div key={ id }>
      Item
      <div data-testid={ `${test.dataTestId41}${index}` }>{id}</div>
      Descrição
      <div data-testid={ `${test.dataTestId42}${index}` }>{name}</div>
      Quantitdade
      <div data-testid={ `${test.dataTestId43}${index}` }>{quantity}</div>
      Valor unitário
      <div>{price}</div>
      Sub-total
      <div
        data-testid={ `${test.dataTestId44}${index}` }
      >
        {(quantity * price).toFixed(2).replace('.', ',')}
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
