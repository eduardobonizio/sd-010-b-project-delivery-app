import React from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';

function UsersProvider({ children }) {
  const contextValue = {

  };

  return (
    <UsersContext.Provider value={ contextValue }>
      { children }
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UsersProvider;
