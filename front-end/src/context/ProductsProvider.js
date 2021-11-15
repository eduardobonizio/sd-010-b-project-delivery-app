import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const getProducts = async () => {
    try {
      const allProducts = await api.getProducts();
      setProducts(allProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const state = {
    products,
    userInfo,
    setProducts,
    setUserInfo,
    getProducts,
  };

  return (
    <ProductsContext.Provider value={ state }>
      { children }
    </ProductsContext.Provider>);
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
