import React from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

const DeliveryProvider = ({ children }) => {
  const contextValue = {};

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
};

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
