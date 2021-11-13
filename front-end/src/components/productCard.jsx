import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const [quantity, setQuantity] = useState(0);

  const { product } = props;
  const { name, price, urlImage, id } = product;
  console.log(id);

  const onClick = (e) => {
    const { name: tagName } = e.target;
    if (tagName === 'add') setQuantity(quantity + 1);
    if (tagName === 'rm' && quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="100px"
      />
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace(/\./, ',') }
      </p>
      <div>
        <button
          onClick={ onClick }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="rm"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          value={ quantity }
        />
        <button
          onClick={ onClick }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="add"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
