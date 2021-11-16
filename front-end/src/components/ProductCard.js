import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const { product: { id, name, urlImage } } = props;
  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {`${0.0}`}
        {' '}
      </p>
      <img
        width="100px"
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
