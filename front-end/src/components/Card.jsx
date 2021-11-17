import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CardsProducts({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { id, name, price } = product;
  return (
    <main
      data-testid={ `customer_products__element-card-price-${id}` }
    >
      <p>{ `R$${price}` }</p>
      <img src={ product.url_image } alt={ name } width="100px" />
      <h3>{ name }</h3>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ quantity > 0 ? () => setQuantity(quantity - 1) : null }
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
    </main>
  );
}

CardsProducts.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    url_image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default CardsProducts;
