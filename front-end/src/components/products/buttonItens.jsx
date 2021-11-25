import React, { useState } from 'react';

const ButtonItens = (elem) => {
  const [count, setCount] = useState(0);
  const { id } = elem;
  return (
    <div className="card-count-button">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => { if (count > 0) { setCount(count - 1); } } }
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
        onClick={ () => setCount(parseInt(count, 10) + 1) }
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default ButtonItens;
