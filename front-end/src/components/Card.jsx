import React from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

function Card(props) {
  // const { products } = useContext(Context);
  const { item } = props;
  const { price, name, id } = item;

  console.log(item);
  return (
    <main>
      <section>
        <h1
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price}
        </h1>
        <img
          src={ item.url_image }
          alt="Imagem"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <h3
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </h3>
      </section>
      <section>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          title="-"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          title="quantidade de ítens"
          min="1"
          max="15"
          step="1"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          title="+"
        >
          +
        </button>
      </section>
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
