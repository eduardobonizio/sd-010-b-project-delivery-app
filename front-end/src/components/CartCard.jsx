import React, { useContext } from 'react';

import Context from '../context/Context';

import '../styles/cartCard.css';

const CartCard = () => {
  const { totalCart } = useContext(Context);

  return (
    <span
      className="cart-card__container"
      data-testid="customer_products__checkout-bottom-value"
    >
      Ver Carrinho
      {' '}
      <strong data-testid="???">
        R$
        {' '}
        { totalCart }
      </strong>
    </span>
  );
};

export default CartCard;
