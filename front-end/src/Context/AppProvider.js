import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [dataOrder, setDataOrder] = useState([]);
  const [dataSeler, setDataSeler] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const url = 'http://localhost:3001/products';
      fetch(url)
        .then((response) => response.json())
        .then((response) => setProducts(response.products));
    };
    getProducts();
  }, []);

  const contextValue = {
    products,
    dataUser,
    setDataUser,
    dataOrder,
    setDataOrder,
    dataSeler,
    setDataSeler,
  };

  return (
    <AppContext.Provider
      value={ { ...contextValue } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
