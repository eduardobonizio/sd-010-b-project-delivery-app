import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProductsContext from '../context/productContext';

function DrinkCard({ product }) {
  const { id, name, price, url_image: urlImage } = product;

  const [quantity, setQuantity] = useState(0);
  const { updateCart } = useContext(ProductsContext);

  useEffect(() => {
    updateCart({ name, price, quantity });
    // eslint-disable-next-line
  }, [quantity]);

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace('.', ',')}
      </span>
      <img
        src={ urlImage }
        alt={ `Foto do produto ${name}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </span>
      <button
        type="button"
        onClick={ () => { setQuantity(quantity - 1); } }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />

      <button
        type="button"
        onClick={ () => { setQuantity(quantity + 1); } }
        data-testid={ `customer_products__button-card-add-item-${id}` }
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
