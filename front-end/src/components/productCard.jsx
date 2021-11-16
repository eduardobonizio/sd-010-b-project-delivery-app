import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ id, price, image, description }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  const onChangeInput = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
        {' '}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ description }
      />
      <div>
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>
          {description}
        </h2>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            className={ style.decrement }
            onClick={ decrement }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            value={ quantityItem || 0 }
            name={ id }
            onChange={ onChangeInput }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            className={ style.increment }
            onClick={ increment }
          >
            +
          </button>

        </div>
      </div>
    </div>
  );
};

export default {
  ProductCard,
};

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
