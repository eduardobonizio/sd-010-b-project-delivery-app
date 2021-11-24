import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { item } = props;
  const { price, name, id } = item;

  const sumPrice = price * quantity;

  const handleClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main>
      <div className="card">
        <section>
          <h1
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            {sumPrice.toFixed(2).toString().replace(/\./, ',')}
          </h1>
          <img
            src={ item.url_image }
            alt="Descrição da Imagem"
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <h5
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </h5>
        </section>
        <section>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            title="-"
            onClick={ () => handleClick() }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            title="quantidade de ítens"
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
            value={ quantity }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            title="+"
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
        </section>
      </div>
    </main>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};

export default Card;
