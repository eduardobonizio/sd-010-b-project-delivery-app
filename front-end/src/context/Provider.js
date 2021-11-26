import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductById } from '../apis/products';

import Context from './Context';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const changeProductCartQuantity = (id, quantity) => {
    setCart((oldCard) => oldCard.map((product) => {
      if (product.id === id) return { ...product, quantity };
      return product;
    }));
  };

  const addProductToCart = async (id, quantity) => {
    const product = await getProductById(id);
    setCart([...cart, { ...product, quantity }]);
  };

  const deleteProductFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const increaseProductFromCart = (id) => {
    const productExistsOnCart = cart.find((product) => product.id === id);

    if (productExistsOnCart) {
      changeProductCartQuantity(id, productExistsOnCart.quantity + 1);
    } else {
      addProductToCart(id, 1);
    }
  };

  const decreaseProductFromCart = (id) => {
    const productExistsOnCart = cart.find((product) => product.id === id);

    if (productExistsOnCart) {
      if (productExistsOnCart.quantity > 1) {
        changeProductCartQuantity(id, productExistsOnCart.quantity - 1);
      } else {
        deleteProductFromCart(id);
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
        changeProductCartQuantity(id, value);
      } else {
        const product = await getProductById(id);
        setCart([...cart, { ...product, quantity: value }]);
      }
    } else {
      addProductToCart(id, value);
    }
  };

  function validateLogin(email, password) {
    const validator = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    const PASSWORD_MIN_LENGHT = 6;
    if (password.length >= PASSWORD_MIN_LENGHT && validator.test(email)) {
      return true;
    }
    return false;
  }

  const context = {
    cart,
    totalCart,
    increaseProductFromCart,
    decreaseProductFromCart,
    setProductQuantityManual,
    deleteProductFromCart,
    validateLogin,
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
