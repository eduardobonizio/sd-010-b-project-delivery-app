/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Context } from '../provider/Provider';

const ProductsCardsHandleButtons = ({ el }) => {
  const { setOrderInProgress, orderInProgress,
    setTotalOrder, totalOrder } = useContext(Context);
  const [quantity, setQuantity] = useState(0);
  const { id, name, price, url } = el;

  const arrToRemove = orderInProgress.filter((element) => id === element.id);
  const arrRest = orderInProgress.filter((element) => id !== element.id);
  const arrQuantitity = arrToRemove.map((arr) => arr.quantity);

  const handleProductsObjectsToOrders = () => ({
    id, name, price, url, quantity,
  });

  useEffect(() => {
    if (arrQuantitity.length > 0) {
      setQuantity(arrQuantitity[0]);
    }
  }, []);

  useEffect(() => {
    if (quantity > 1) {
      return setOrderInProgress(
        arrRest.concat(handleProductsObjectsToOrders()),
      );
    }

    if (quantity > 0) {
      return setOrderInProgress(
        arrRest.concat(handleProductsObjectsToOrders()),
      );
    }

    return setOrderInProgress(arrRest);
  }, [quantity]);

  const handleClick = (elementName, value) => {
    if (elementName === '+') {
      if (arrToRemove.length === 0) {
        setQuantity(quantity + 1);
      }
      if (arrToRemove.length > 0) {
        setQuantity(quantity + 1);
      }

      const total = totalOrder + parseFloat(price);
      return setTotalOrder(parseFloat(total.toFixed(2)));
    }

    if (elementName === '-' && quantity >= 1) {
      setQuantity(quantity - 1);
      const total = totalOrder - parseFloat(price);

      return setTotalOrder(parseFloat(total.toFixed(2)));
    }
    if (elementName !== '-') {
      setQuantity(Number(value));

      const total = totalOrder + (parseFloat(price) * quantity);

      return setTotalOrder(parseFloat(total.toFixed(2)));
    }
  };

  return (
    <div className="div-btn-mainDiv">
      <h4
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h4>
      <div className="div-btn-handlers">
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          className="btn-handlers"
          value="-"
          onClick={ ({ target: { value } }) => handleClick(value) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          className="btn-handlers"
          value={ quantity }
          onChange={ ({ target: { value } }) => handleClick('bah', value) }
          type="text"
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          className="btn-handlers"
          value="+"
          onClick={ ({ target: { value } }) => handleClick(value) }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductsCardsHandleButtons;

ProductsCardsHandleButtons.propTypes = {
  el: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};
