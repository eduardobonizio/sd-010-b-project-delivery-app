import React, { createContext, useContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

import APITOKEN from '../api';

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('');

  localStorage.setItem('cart', JSON.stringify(cart));

  const handleQuantityInput = ({ target }, prod) => {
    const { value } = target;
    if (+value > 0) {
      let manipulateCart = [...cart];
      const indexOfProd = manipulateCart.findIndex((p) => p.id === prod.id);
      if (indexOfProd >= 0) {
        manipulateCart[indexOfProd].qty = +value;
        setCart(manipulateCart);
      } else {
        manipulateCart = [...cart, { ...prod, qty: +value }];
        setCart(manipulateCart);
      }
    } else {
      let manipulateCart = [...cart];
      manipulateCart = manipulateCart.filter((p) => p.id !== prod.id);
      setCart(manipulateCart);
    }
  };

  const addProduct = (prod) => {
    const existingProductIndex = cart.findIndex((p) => p.id === prod.id);
    if (existingProductIndex >= 0) {
      const manipulateCart = [...cart];
      const produto = manipulateCart.find((p) => p.id === prod.id);
      if (produto) produto.qty += 1;
      setCart(manipulateCart);
    } else {
      setCart([...cart, { ...prod, qty: 1 }]);
    }
  };

  const removeProduct = (prod) => {
    const index = cart.findIndex((el) => el.id === prod.id);
    const newArr = [...cart];
    if (index >= 0) {
      const produto = newArr.find((p) => p.id === prod.id);
      if (produto && produto.qty < 2) {
        newArr.splice(index, 1);
      }
      if (produto && produto.qty >= 2) produto.qty -= 1;
      setCart(newArr);
    }
  };

  const handleCart = ({ target }, prod) => {
    const { name } = target;
    if (name === 'plus') {
      addProduct(prod);
    } else {
      removeProduct(prod);
    }
  };

  const handleTotalValue = () => {
    const zero = 0;
    if (!cart.length) return zero.toFixed(2);
    const total = cart.reduce((acc, curr) => acc + +curr.price * +curr.qty, 0);
    return total.toFixed(2);
  };

  const handleRemoveProduct = (id) => {
    const newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
  };

  const handleSaleStatus = async (e, id) => {
    const { name } = e.target;
    let currStatus = '';
    if (name === 'transit') currStatus = 'Em Trânsito';
    if (name === 'delivired') currStatus = 'Entregue';
    if (name === 'preparing') currStatus = 'Preparando';
    try {
      const res = await APITOKEN.updateSaleStatus(id, currStatus);
      if (res) setStatus(currStatus);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    APITOKEN.getAllProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <ProductContext.Provider
      value={ { cart,
        setCart,
        products,
        handleQuantityInput,
        handleCart,
        handleTotalValue,
        handleRemoveProduct,
        status,
        setStatus,
        handleSaleStatus,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  const { cart, setCart, products,
    handleQuantityInput, handleCart,
    handleTotalValue,
    handleRemoveProduct, status, setStatus, handleSaleStatus } = context;
  return { cart,
    setCart,
    products,
    handleQuantityInput,
    handleCart,
    handleTotalValue,
    handleRemoveProduct,
    status,
    setStatus,
    handleSaleStatus,

  };
}

ProductContextProvider.propTypes = {
  children: node.isRequired,
};
