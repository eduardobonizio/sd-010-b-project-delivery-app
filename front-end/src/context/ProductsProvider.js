import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

const ProductsProvider = ({ children }) => {
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

  const context = {
    products,
    userInfo,
    setProducts,
    setUserInfo,
    getProducts,
  };

  return (
    <ProductsContext value={ context }>
      { children }
    </ProductsContext>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
