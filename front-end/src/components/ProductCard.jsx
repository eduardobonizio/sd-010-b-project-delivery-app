import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Context from '../context/Context';

import '../styles/productCard.css';

const ProductsCard = ({ product: { id, name, price, url_image: urlImage } }) => {
  const {
    increaseProductFromCart,
    cart,
    decreaseProductFromCart,
    setProductQuantityManual,
    deleteProductFromCart,
  } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  const convertDotToComma = (value) => value.toString().replace('.', ',');

  const updateProductQuantity = () => {
    const product = cart.find((cartProduct) => cartProduct.id === id);

    if (product) {
      setQuantity(product.quantity);
    } else {
      setQuantity(0);
    }
  };

  const handleQuantityInput = ({ value }) => {
    // BASED ON https://www.ti-enxame.com/pt/javascript/regex-para-verificar-se-uma-string-contem-apenas-numeros/942732264/
    const regex = new RegExp(/^-?\d*\.?\d*$/);
    if (regex.test(value)) {
      if (value !== '') {
        if (parseInt(value[0], 10) === 0 && parseInt(value[1], 10) === 0) {
          setProductQuantityManual({ id, value: parseInt(value, 10) });
        } else {
          // Aceita zero no input
          setProductQuantityManual({ id, value });
        }
      } else {
        setQuantity('');
      }
    }
  };

  const onFocusOutQuantityInput = ({ value }) => {
    if (value === '') {
      deleteProductFromCart(id);
      setQuantity(0);
    }
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
            onClick={ () => decreaseProductFromCart(id) }
          >
            -
          </button>
          <input
            className="product-card__container__value"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ ({ target }) => handleQuantityInput(target) }
            onBlur={ ({ target }) => onFocusOutQuantityInput(target) }
          />
          <button
            className="product-card__container__button-sum"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => increaseProductFromCart(id) }
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
