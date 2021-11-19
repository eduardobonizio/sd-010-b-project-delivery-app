import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiGetAllProducts from '../services/products/customerProduct';
import Context from './Context';
import { getFromLocalStorage } from '../helpers/localStorage';

export default function Provider({ children }) {
  const [dataProducts, setDataProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

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
  }, []);

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

  useEffect(() => {
    const totalCartProducts = getFromLocalStorage('totalCart');
    setTotalCart(totalCartProducts);
  }, []);

  const state = {
    cartProduct,
    setCartProduct,
    dataProducts,
    setDataProducts,
    totalCart,
    setTotalCart,
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
