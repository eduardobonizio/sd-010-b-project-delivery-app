import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductsContext from './productContext';

function ProductsProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  const updateCart = (cartItem) => {
    const { name, price, quantity } = cartItem;
    console.log(quantity);

    if (productsInCart.some((el) => name === el.name)) {
      const updatedCart = productsInCart.map((el) => {
        if (el.name === name) {
          return {
            name,
            price,
            quantity,
          };
        }
        return el;
      });

      setProductsInCart(updatedCart);
    } else {
      productsInCart.push(cartItem);
    }
  };

  const globalContext = {
    totalPrice,
    setTotalPrice,
    productsInCart,
    setProductsInCart,
    updateCart,

  };

  return (
    <ProductsContext.Provider value={ globalContext }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;

export default ProductsProvider;
