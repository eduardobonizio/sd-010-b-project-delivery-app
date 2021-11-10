/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import tokenHandler from '../helper/functions/tokenHandler';

const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const context = {
    products, setProducts,
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    tokenHandler(token, location);
  }, []);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export { Provider, Context };
