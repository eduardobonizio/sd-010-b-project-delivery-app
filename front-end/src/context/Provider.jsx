import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiGetAllProducts from '../services/products/customerProduct';
import Context from './Context';

export default function Provider({ children }) {
  const [dataProducts, setDataProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalProduct, setSubTotalProduct] = useState(0);

  useEffect(() => {
    async function apiRequest() {
      const response = await apiGetAllProducts() || [];
      const newResponse = response.map((value) => ({
        ...value,
        quantity: 0,
      }));
      setDataProducts(newResponse);
    }
    apiRequest();
  }, [subTotalProduct]);

  useEffect(() => {
    const valueTotalProduct = dataProducts
      .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotalPrice(valueTotalProduct);
  }, [dataProducts]);

  useEffect(() => {
    const newArray = [];
    dataProducts.map(({ name, quantity, price }) => {
      if (quantity > 0) {
        newArray.push({
          name,
          quantity,
          price: Number(price),
          subTotal: quantity * Number(price),
        });
      }
      return [];
    });
    setCartProduct(newArray);
  }, [dataProducts]);

  const state = {
    cartProduct,
    setCartProduct,
    dataProducts,
    setDataProducts,
    totalPrice,
    setTotalPrice,
    setSubTotalProduct,
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
