import React from 'react';
import PropTypes from 'prop-types';

import '../styles/productCard.css';

const ProductsCard = ({ product: { id, name, price, url_image: urlImage } }) => (
  <main id={ id } className="product-card__container">
    <span
      className="product-card__container__price"
      data-testid="customer_products__element-card-price-"
    >
      { price }
    </span>
    <section>
      <img
        data-testid="customer_products__img-card-bg-image-"
        src={ urlImage }
        alt={ `Product ${name}` }
        className="product-card__container__image"
      />
    </section>
    <footer className="product-card__container__footer">
      <span data-testid="customer_products__element-card-title-">{ name }</span>
      <span>
        <button
          className="product-card__container__button-sub"
          type="button"
          data-testid="customer_products__button-card-rm-item-"
        >
          -
        </button>
        <span
          className="product-card__container__value"
          data-testid="customer_products__input-card-quantity-"
        >
          0
        </span>
        <button
          className="product-card__container__button-sum"
          type="button"
          data-testid="customer_products__button-card-add-item-"
        >
          +
        </button>
      </span>
    </footer>
  </main>
);

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
