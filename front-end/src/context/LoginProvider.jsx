import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoginContext from './LoginContext';

function LoginProvider({ children }) {

  const context = {
    
  };

  return (
    <LoginContext.Provider value={ context }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default LoginProvider;
