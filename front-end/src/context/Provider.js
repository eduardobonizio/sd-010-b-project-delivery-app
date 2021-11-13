import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductById } from '../apis/products';

import Context from './Context';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const addProductToCart = async (id) => {
    const productExistsOnCart = cart.find((product) => product.id === id);

    if (productExistsOnCart) {
      setCart((oldCard) => oldCard.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      }));
    } else {
      const product = await getProductById(id);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeProductFromCart = async (id) => {
    const productExistsOnCart = cart.find((product) => product.id === id);

    if (productExistsOnCart) {
      if (productExistsOnCart.quantity > 1) {
        setCart((oldCard) => oldCard.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }

          return product;
        }));
      } else {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
      }
    }
  };

  const updateTotalCartValue = () => {
    const totalValue = cart.reduce((acc, { price, quantity }) => (
      Number(price) * Number(quantity)) + acc, 0);
    const decimalTotalValue = totalValue.toFixed(2);

    setTotalCart(decimalTotalValue);
  };

  useEffect(() => {
    updateTotalCartValue();
  }, [cart]);

  const setProductQuantityManual = async ({ id, value }) => {
    const productExistsOnCart = cart.find((product) => product.id === id);

    if (productExistsOnCart) {
      if (value !== 0) {
        setCart((oldCard) => oldCard.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: value };
          }

          return product;
        }));
      } else {
        const product = await getProductById(id);
        setCart([...cart, { ...product, quantity: value }]);
      }
    } else {
      const product = await getProductById(id);
      setCart([...cart, { ...product, quantity: value }]);
    }
  };

  const context = {
    cart,
    totalCart,
    addProductToCart,
    removeProductFromCart,
    setProductQuantityManual,
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
