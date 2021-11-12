import React from 'react';
import PropTypes from 'prop-types';

function CardProduct(props) {
  const { id, price, url_image: urlImage, name } = props;

  return (
    <div className="cardProduct" key={ id }>
      <span>{`R$${price}`}</span>
      <img alt="produto" src={ urlImage } width="100" height="50" />
      <div className="card">
        <span>{name}</span>
        <div className="controlerQuantityProduct">
          <button className="decrementProduct" type="button">-</button>
          <span className="quantity">0</span>
          <button className="incrementeProduct" type="button">+</button>
        </div>
      </div>
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
