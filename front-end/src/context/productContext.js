import React, { createContext, useContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

import API from '../api';

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  localStorage.setItem('cart', JSON.stringify(cart));

  const handleQuantityInput = ({ target }, prod) => {
    const { value } = target;
    const arr = cart.filter((el) => el.id !== prod.id);
    for (let i = 0; i < +value; i += 1) {
      arr.push(prod);
    }
    setCart(arr);
  };

  const handleCart = ({ target }, prod) => {
    const { name } = target;
    if (name === 'plus') {
      setCart([...cart, prod]);
    } else {
      const index = cart.findIndex((el) => el.id === prod.id);
      const newArr = [...cart];
      if (index >= 0) {
        newArr.splice(index, 1);
        setCart(newArr);
      }
    }
  };

  const handleTotalValue = () => {
    const zero = 0;
    if (!cart.length) return zero.toFixed(2);
    const total = cart.reduce((acc, curr) => acc + +curr.price, 0);
    return total.toFixed(2);
  };

  const handleQuantity = (prodId) => {
    const prod = cart.filter((el) => el.id === prodId);
    return prod.length;
  };

  const handleSubTotal = (id) => {
    const elements = cart.filter((el) => el.id === id);
    const subttoal = elements.reduce((acc, curr) => acc + +curr.price, 0);
    return subttoal.toFixed(2);
  };

  const handleRemoveProduct = (id) => {
    const newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
  };

  useEffect(() => {
    API.getAll().then((res) => setProducts(res.data));
  }, []);

  return (
    <ProductContext.Provider
      value={ { cart,
        setCart,
        products,
        handleQuantityInput,
        handleCart,
        handleTotalValue,
        handleQuantity,
        handleSubTotal,
        handleRemoveProduct } }
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  const { cart, setCart, products,
    handleQuantityInput, handleCart,
    handleTotalValue, handleQuantity, handleSubTotal, handleRemoveProduct } = context;
  return { cart,
    setCart,
    products,
    handleQuantityInput,
    handleCart,
    handleTotalValue,
    handleQuantity,
    handleSubTotal,
    handleRemoveProduct,
  };
}

ProductContextProvider.propTypes = {
  children: node.isRequired,
};
