import React, { useState } from 'react';
import DeliveryContext from './DeliveryContext';

const DeliveryProvider = ({ children }) => {
  const [exemplo, setExemplo] = useState('Valor inicial');

  const contextValue = {
    exemplo,
    setExemplo,
  };

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
