import React from 'react';
import PropTypes from 'prop-types';
import test from '../../utils/dataTestIdDict';
import '../../styles/SeleDetails.css';

function renderProductCards({ id, name, price, quantity }, index) {
  return (
    <div key={ id } className="conteiner-seles-products-details">
      <div className="menu-seles-products-details">
        <div data-testid={ `${test.dataTestId41}${index}` }>{id}</div>
        <div data-testid={ `${test.dataTestId42}${index}` }>{name}</div>
        <div data-testid={ `${test.dataTestId43}${index}` }>{quantity}</div>
        <div>{price}</div>
        <div
          data-testid={ `${test.dataTestId44}${index}` }
        >
          {(quantity * price).toFixed(2).replace('.', ',')}
        </div>
      </div>
    </div>
  );
}

function SaleProductsDetails({ products }) {
  return (
    <div>
      {
        products.map(renderProductCards)
      }
    </div>
  );
}

SaleProductsDetails.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default SaleProductsDetails;
