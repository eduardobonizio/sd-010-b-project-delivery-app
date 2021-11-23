import React from 'react';
import PropTypes from 'prop-types';

import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [userData, setUserData] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [arrayProducts, setArrayProducts] = React.useState([]);

  const context = {
    userData,
    setUserData,
    totalPrice,
    setTotalPrice,
    arrayProducts,
    setArrayProducts,
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
