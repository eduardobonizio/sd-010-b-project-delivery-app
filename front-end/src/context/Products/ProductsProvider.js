import React from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

function UsersProvider({ children }) {
  const contextValue = {

  };

  return (
    <ProductsContext.Provider value={ contextValue }>
      { children }
    </ProductsContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UsersProvider;
