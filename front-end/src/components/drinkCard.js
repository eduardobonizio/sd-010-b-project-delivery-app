import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ product }) {
  return (
    <div>
      <span>{`R$ ${product.price}`}</span>
      <img src={ product.url_image } alt={ `Foto do produto ${product.name}` } />
      <span>{product.name}</span>
    </div>

  );
}

DrinkCard.propTypes = {
  product: PropTypes.arrayOf.isRequired,
};

export default DrinkCard;
