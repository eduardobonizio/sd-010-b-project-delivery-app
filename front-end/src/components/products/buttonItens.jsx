import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppDeliveryContext from '../../context/context';

const ButtonItens = ({ elem }) => {
  const { id, price } = elem;
  const [count, setCount] = useState(0);
  const { sumPrice, setSumPrice } = useContext(AppDeliveryContext);

  useEffect(() => {
    setSumPrice((count * price));
    console.log(sumPrice);
  }, [count]);

  return (
    <div className="card-count-button">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => {
          if (count > 0) {
            setCount(count - 1);
            // console.log(count);
            // const sum = (count * price);
            // setSumPrice(sum);
          }
        } }
        type="button"
      >
        -
      </button>
      <input
        className="count"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ count }
        onChange={ ({ target: { value } }) => value.match(/\d+/) && setCount(value) }
        type="number"
      />

      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => {
          setCount(parseInt(count, 10) + 1);
          // console.log(count);
          // const sum = count * price;
          // setSumPrice(sum);
        } }
        type="button"
      >
        +
      </button>
    </div>
  );
};

ButtonItens.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired }).isRequired,
};

export default ButtonItens;
