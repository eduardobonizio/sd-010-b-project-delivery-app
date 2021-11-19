import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

const DeliveryProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totalSales, setTotalSales] = useState(0);

  const validarNome = (nome) => {
    const NAME_LENGTH = 12;
    if (nome.length < NAME_LENGTH) {
      return false;
    }

    return true;
  };

  const validarEmail = (e) => {
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;

    if (!emailTester.test(e)) return false;

    return true;
  };

  const validarSenha = (senha) => {
    const SENHA_LENGTH = 6;

    if (senha.length < SENHA_LENGTH) {
      return false;
    }
    return true;
  };

  const contextValue = {
    validarNome,
    validarEmail,
    validarSenha,
    email,
    setEmail,
    password,
    setPassword,
    totalSales,
    setTotalSales,
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
