import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Context from '../context/Context';

import '../styles/productCard.css';

const ProductsCard = ({ product: { id, name, price, url_image: urlImage } }) => {
  const { addProductToCart, cart } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  const convertDotToComma = (value) => value.toString().replace('.', ',');

  const updateProductQuantity = () => {
    const totalProductQuantity = cart.reduce((acc, product) => {
      if (product.id === id) {
        return acc + 1;
      }

      return acc;
    }, 0);

    setQuantity(totalProductQuantity);
  };

  useEffect(() => {
    updateProductQuantity();
  }, [cart]);

  return (
    <main id={ id } className="product-card__container">
      <span
        className="product-card__container__price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { convertDotToComma(price) }
      </span>
      <section>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ `Product ${name}` }
          className="product-card__container__image"
        />
      </section>
      <footer className="product-card__container__footer">
        <span
          className="product-card__container__title"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </span>
        <span>
          <button
            className="product-card__container__button-sub"
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            className="product-card__container__value"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
          />
          <button
            className="product-card__container__button-sum"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => addProductToCart(id) }
          >
            +
          </button>
        </span>
      </footer>
    </main>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
