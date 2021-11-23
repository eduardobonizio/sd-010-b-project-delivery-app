import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [products, setProducts] = useState([]);

  const object = {
    errorMessage,
    setErrorMessage,
    errorRegister,
    setErrorRegister,
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin,
    nameUser,
    setNameUser,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
    products,
    setProducts,
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
