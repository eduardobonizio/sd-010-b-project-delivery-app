import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import ProductsContext from '../context/productContext';

function ShoppingCartStatus() {
  const { totalPrice } = useContext(ProductsContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleClick = () => {
    if (totalPrice > 0) {
      setShouldRedirect(true);
    }
  };
  return (
    <>
      {shouldRedirect && <Redirect to="/customer/checkout" />}
      <button
        type="button"
        disabled={ totalPrice === 0 }
        onClick={ () => { handleClick(); } }
        data-testid="customer_products__button-cart"
      >

        Ver Carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">
          {totalPrice.toFixed(2).replace('.', ',')}
        </span>
      </button>
    </>
  );
}

export default ShoppingCartStatus;
