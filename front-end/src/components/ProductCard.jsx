import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, handleCart, handleQuantityInput, handleQuantity }) {
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
            onClick={ (e) => handleCart(e, product) }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="number"
            value={ handleQuantity(id) }
            onChange={ (e) => handleQuantityInput(e, product) }
            name="quantity"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            name="plus"
            onClick={ (e) => handleCart(e, product) }
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
  handleQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
