import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductById } from '../apis/products';

import Context from './Context';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const addProductToCart = async (id) => {
    const product = await getProductById(id);

    setCart([...cart, { ...product }]);
  };

  const updateTotalCartValue = () => {
    const totalValue = cart.reduce((acc, { price }) => Number(price) + acc, 0);
    const decimalTotalValue = totalValue.toFixed(2);

    setTotalCart(decimalTotalValue);
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
