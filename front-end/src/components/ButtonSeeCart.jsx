import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';

import { ShoppingCartOutlined } from '@ant-design/icons';
import LoginContext from '../context/LoginContext';

export default function ButtonSeeCart() {
  const { totalPrice } = useContext(LoginContext);
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    if (totalPrice > 0) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return (
      <Redirect to="/customer/checkout" />
    );
  }

  return (
    <button
      style={
        { position: 'fixed', bottom: 10, margin: 20 }
      }
      disabled={ !totalPrice }
      type="button"
      data-testid="customer_products__button-cart"
      value={ totalPrice.toFixed(2) }
      onClick={ handleClick }
    >
      <ShoppingCartOutlined style={ { fontSize: '18px', marginRight: 8 } } />
      Ver carrinho:
      {' '}
      R$
      {' '}
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        { totalPrice.toFixed(2).replace('.', ',') }
      </p>
    </button>
  );
}
