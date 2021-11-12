import React from 'react';
import PropTypes from 'prop-types';
import { GoPlus, GoDash } from 'react-icons/go';
import '../styles/Card.css';

function Cards({ values }) {
  const { id, name, price, urlImage } = values;
  return (
    <div className="div-cards">
      <div className="div-image">
        <div
          className="div-price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price},00`}
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
          >
            <GoDash aria-label="sub" style={ { color: 'white' } } />
          </button>
          <div
            className="quantity"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          >
            0
          </div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
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
