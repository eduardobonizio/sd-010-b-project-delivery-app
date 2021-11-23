import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import Context from '../context/Context';

import '../styles/cartCard.css';

const CartCard = () => {
  const { cart, totalCart } = useContext(Context);
  const history = useHistory();

  const convertDotToComma = (value) => value.toString().replace('.', ',');

  const isDisabled = () => {
    if (cart.length) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    isDisabled();
  }, [cart]);

  return (
    <button
      type="button"
      className="cart-card__container"
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/customer/checkout') }
      disabled={ isDisabled() }
    >
      Ver Carrinho R$
      {' '}
      <strong data-testid="customer_products__checkout-bottom-value">
        { convertDotToComma(totalCart) }
      </strong>
    </button>
  );
};

export default CartCard;
