import React, { useContext } from 'react';

import Context from '../context/Context';

import '../styles/cartCard.css';

const CartCard = () => {
  const { totalCart } = useContext(Context);

  const convertDotToComma = (value) => value.toString().replace('.', ',');

  return (
    <span className="cart-card__container">
      Ver Carrinho R$
      {' '}
      <strong data-testid="customer_products__checkout-bottom-value">
        { convertDotToComma(totalCart) }
      </strong>
    </span>
  );
};

export default CartCard;
