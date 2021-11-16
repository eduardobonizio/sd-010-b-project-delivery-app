import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const [quantity, setQuantity] = useState(0);

  const { product, setSubtotal } = props;
  const { name, price, urlImage, id } = product;

  const onClick = (e) => {
    const { name: tagName } = e.target;
    let total = 0;
    if (tagName === 'add') {
      setQuantity(quantity + 1);
      total = (quantity + 1) * price;
    }
    if (tagName === 'rm' && quantity > 0) {
      setQuantity(quantity - 1);
      total = (quantity - 1) * price;
    }
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const key = id;
    carrinho[key] = total;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    const subtotal = Object.values(carrinho).reduce((acc, curr) => acc + curr);
    setSubtotal(subtotal.toFixed(2).replace(/\./, ','));
  };

  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="100px"
      />
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace(/\./, ',') }
      </p>
      <div>
        <button
          onClick={ onClick }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="rm"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          value={ quantity }
        />
        <button
          onClick={ onClick }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="add"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setSubtotal: PropTypes.func.isRequired,
};

export default ProductCard;
