import React from 'react';
import PropTypes from 'prop-types';

function CardsProducts({ product }) {
  return (
    <div
      data-testid={ `customer_products__element-card-price-${product.id}` }
    >
      <image src={ product.url_image } />
      <h3>{ product.name }</h3>
      <p>{ product.price }</p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -

      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        +

      </button>
    </div>
  );
}

CardsProducts.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardsProducts;
