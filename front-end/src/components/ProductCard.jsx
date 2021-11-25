import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, handleCart, handleQuantityInput }) {
  const [qty, setQty] = useState(0);
  const handleChange = (e) => {
    const { target: { value, name } } = e;
    if (name === 'subtract' && qty <= 0) {
      setQty(0);
    } else {
      switch (name) {
      case 'subtract':
        setQty(qty - 1);
        break;
      case 'plus':
        setQty(qty + 1);
        break;
      default:
        setQty(+value);
        break;
      }
    }
  };
  const { id, name, price, urlImage } = product;
  return (
    <div className="product-card">
      <div key={ id }>
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          R$
          {' '}
          {price.replace('.', ',')}
        </p>
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
            name="subtract"
            onClick={ (e) => {
              handleCart(e, product);
              handleChange(e);
            } }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="number"
            min="0"
            value={ qty }
            onChange={ (e) => {
              handleQuantityInput(e, product);
              handleChange(e);
            } }
            name="quantity"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            name="plus"
            onClick={ (e) => {
              handleCart(e, product);
              handleChange(e);
            } }
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
  handleCart: PropTypes.func.isRequired,
  handleQuantityInput: PropTypes.func.isRequired,
};

export default ProductCard;
