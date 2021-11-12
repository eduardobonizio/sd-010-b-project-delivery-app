import React from 'react';

import '../styles/cartCard.css';

const CartCard = () => (
  <span
    className="cart-card__container"
    data-testid="customer_products__checkout-bottom-value"
  >
    Ver Carrinho
    {' '}
    <strong data-testid="???">R$ 20,46</strong>
  </span>
);

export default CartCard;
