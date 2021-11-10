import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const object = {
    errorLogin,
    setErrorLogin,
    errorRegister,
    setErrorRegister,
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin,
    nameRegister,
    setNameRegister,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister,
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
