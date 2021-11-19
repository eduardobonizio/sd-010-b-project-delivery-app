import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import ProductsContext from '../context/productContext';

function ShoppingCartStatus() {
  const { totalPrice, productsInCart } = useContext(ProductsContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleClick = () => {
    if (totalPrice > 0) {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
      setShouldRedirect(true);
    }
  };
  return (
    <>
      {shouldRedirect && <Redirect to="/customer/checkout" />}
      <button
        className="bg-yellow-color px-10 py-3 mb-40 rounded-xl text-xl font-medium
        self-end my-10"
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
