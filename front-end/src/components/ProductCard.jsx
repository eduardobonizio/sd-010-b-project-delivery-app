import React from 'react';
import PropTypes from 'prop-types';

import '../styles/productCard.css';

const ProductsCard = ({ product: { id, name, price, url_image: urlImage } }) => (
  <main id={ id } className="product-card__container">
    <section>
      <span className="product-card__container__price">{ price }</span>
      <img
        src={ urlImage }
        alt={ `Product ${name}` }
        className="product-card__container__image"
      />
    </section>
    <footer className="product-card__container__footer">
      <span>{ name }</span>
      <span>
        <button className="product-card__container__button-sub" type="button">-</button>
        <span className="product-card__container__value">0</span>
        <button className="product-card__container__button-sum" type="button">+</button>
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
