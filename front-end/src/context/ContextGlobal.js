import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const object = {
    errorMessage,
    setErrorMessage,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <Context.Provider value={ object }>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.Node,
}.isRequired;
