import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  return (
    <div className="product-card">
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="product"
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <div className="btns">
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductCard;
