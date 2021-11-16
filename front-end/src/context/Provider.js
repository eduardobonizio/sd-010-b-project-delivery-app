import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [User, setUser] = useState({});

  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const insertCart = async (eachItem) => {
    const { id, name, price, quantity } = eachItem;
    if (cart.some((item) => item.id === id)) {
      const newCart = cart.map((item) => {
        if (item.id === id) return { id, name, price, quantity };
        return item;
      });
      setCart(newCart);
      console.log(cart);
    } else {
      cart.push(eachItem);
    }
  };

  useEffect(() => {
    const valorTotal = cart.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    console.log(valorTotal);
    setTotalPrice(valorTotal);
  }, [cart]);

  const context = {
    User,
    setUser,
    allProducts,
    setAllProducts,
    cart,
    setCart,
    insertCart,
    totalPrice,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

// Validação de props
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
