import React from 'react';
import PropTypes from 'prop-types';

function CardProduct(props) {
  const { id, price, url_image: urlImage, name } = props;

  return (
    <div className="cardProduct" key={ id }>
      <div className="price-product">
        <span>R$</span>
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace('.', ',')}
        </span>
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt="produto"
        src={ urlImage }
        width="100"
        height="50"
      />

      <span data-testid={ `customer_products__element-card-title-${id}` }>{name}</span>

      <form className="controlerQuantityProduct">
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          className="decrementProduct"
          type="button"
          onClick=""
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          className="quantity"
          value="0"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          className="incrementeProduct"
          type="button"
          onClick=""
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
