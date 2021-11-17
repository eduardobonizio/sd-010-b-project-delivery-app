import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoPlus, GoDash } from 'react-icons/go';
import { updateProducts, deleteProducts } from '../utils/localStorage';
import '../styles/Card.css';

function Cards({ values }) {
  const [quantity, setQuantity] = useState(false);
  const { id, name, price, urlImage } = values;

  const sumQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (quantity !== false) {
      updateProducts({
        id,
        name,
        quantity,
        preco: price,
        subTotal: price * quantity,
      });
    }
    if (quantity === 0) {
      deleteProducts(id);
    }
  }, [quantity]);

  return (
    <div className="div-cards">
      <div className="div-image">
        <div
          className="div-price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price}`}
        </div>
        <img
          alt="Cerveja"
          src={ urlImage }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="div-p-buttons">
        <div className="div-p">
          <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
        </div>
        <div className="div-buttons">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => subQuantity() }
          >
            <GoDash aria-label="sub" style={ { color: 'white' } } />
          </button>
          <div
            className="quantity"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          >
            {quantity}
          </div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => sumQuantity() }
          >
            <GoPlus aria-label="somar" style={ { color: 'white' } } />
          </button>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  values: PropTypes.object,
}.isRequired;

export default Cards;
