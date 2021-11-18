/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';

import ProductsContext from '../context/productContext';

const INC_VALUE = 1;
const DES_VALUE = -1;

function DrinkCard({ product }) {
  const { id, name, price, url_image: urlImage } = product;

  const [quantity, setQuantity] = useState(0);
  const { updateCart } = useContext(ProductsContext);

  const updateQuantity = (value) => {
    if (quantity + value >= 0) {
      setQuantity(Number(quantity) + Number(value));
    }
  };

  useEffect(() => {
    updateCart({ id, name, price, quantity });
    // eslint-disable-next-line
  }, [quantity]);

  return (
    <div className="transition duration-300 ease-in-out transform bg-white rounded-2xl shadow-xl hover:-translate-y-1 hover:scale-105 border-t-4 border-dark-color flex flex-col mx-8 my-8 items-center w-72">
      <div className="my-4 mx-4 bg-yellow-color flex flex-row self-start px-4 py-2 rounded-lg">
        R$
        <div data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace('.', ',')}
        </div>

      </div>
      <img
        className="h-48"
        src={ urlImage }
        alt={ `Foto do produto ${name}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div className="flex flex-col items-center bg-yellow-color rounded-b-2xl py-6 w-full">
        <span
          className="mb-4"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </span>
        <div className="flex flex-row justify-center">

          <button
            className="text-4xl"
            type="button"
            onClick={ () => { updateQuantity(DES_VALUE); } }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            <AiFillMinusSquare />
          </button>
          <input
            className="w-1/5 text-center bg-yellow-color text-2xl"
            type="number"
            value={ quantity }
            min="0"
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />

          <button
            className="text-4xl"
            type="button"
            onClick={ () => { updateQuantity(INC_VALUE); } }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            <AiFillPlusSquare />
          </button>
        </div>
      </div>
    </div>

  );
}

DrinkCard.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default DrinkCard;
