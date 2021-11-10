import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

const DeliveryProvider = ({ children }) => {
  const [registerForm, setRegisterForm] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const contextValue = {
    registerForm,
    setRegisterForm,
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
