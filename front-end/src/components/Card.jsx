import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function CardsProducts({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { dataOrder, setDataOrder } = useContext(AppContext);
  const [obj, setObj] = useState({});
  const { id, name, price } = product;

  const handleClick = (() => {
    setObj({ name, quantity, price, total: quantity * Number(price) });
  });
  const updateOrder = () => {
    const filter = dataOrder.filter((e) => e.name !== name && e.quantity > 0);
    setDataOrder([...filter, obj]);
  };
  useEffect(() => {
    updateOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obj]);

  useEffect(() => {
    handleClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);
  return (
    <main
      data-testid={ `customer_products__element-card-price-${id}` }
    >
      <p>{ `R$${price}` }</p>
      <img src={ product.url_image } alt={ name } width="100px" />
      <h3>{ name }</h3>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ quantity > 0 ? () => setQuantity(quantity - 1) : updateOrder }
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        {quantity}

      </span>
      <button
        name={ id }
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => {
          setQuantity(quantity + 1);
        } }

      >
        +
      </button>
    </main>
  );
}

CardsProducts.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    url_image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default CardsProducts;
