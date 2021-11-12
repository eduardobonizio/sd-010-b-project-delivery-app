import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price.replace('.', ',')}
      </span>
      <img
        src={ product.url_image }
        alt={ `Foto do produto ${product.name}` }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <span data-testid={ `customer_products__element-card-title-${product.id}` }>
        {product.name}
      </span>
      <button
        type="button"
        onClick={ () => { setQuantity(quantity - 1); } }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      />

      <button
        type="button"
        onClick={ () => { setQuantity(quantity + 1); } }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>

  );
}

DrinkCard.propTypes = {
  product: PropTypes.arrayOf.isRequired,
};

export default DrinkCard;
