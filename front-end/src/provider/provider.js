import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppDeliveryContext from '../context/context';

function Provider({ children }) {
  const [sumPrice, setSumPrice] = useState(0);
  const contextValue = {
    sumPrice,
    setSumPrice,
  };

  return (
    <AppDeliveryContext.Provider value={ contextValue }>
      {children}
    </AppDeliveryContext.Provider>
  );
}

Provider.propTypes = {
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
