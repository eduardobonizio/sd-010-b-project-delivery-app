import React from 'react';
import PropTypes from 'prop-types';

import '../styles/productCard.css';

const ProductsCard = ({ product: { id, name, price, url_image: urlImage } }) => (
  <main id={ id } className="product-card__container">
    <section>
      <img
        src={ urlImage }
        alt={ `Product ${name}` }
        className="product-card__container__image"
      />
      <span className="product-card__container__price">{ price }</span>
    </section>
    <footer>
      <span>{ name }</span>
      <span>{ price }</span>
      <span><button type="button">-</button></span>
      <span>0</span>
      <span><button type="button">+</button></span>
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
