import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <div>
      <div
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price.replace('.', ',') }
      </div>
      <img
        src={ product.urlImage }
        alt={ `Imagem de ${product.name}` }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            type="number"
            min="0"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
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
