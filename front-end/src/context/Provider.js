import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductById } from '../apis/products';

import Context from './Context';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const addProductToCart = async (id) => {
    const product = await getProductById(id);
    console.log(cart);
    setCart({ ...cart, ...product });
  };

  const updateTotalCartValue = () => {
    setTotalCart(totalCart + 1);
    console.log(totalCart);
  };

  useEffect(() => {
    updateTotalCartValue();
  }, [cart]);

  const context = {
    totalCart,
    addProductToCart,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
