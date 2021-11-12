import React, { createContext, useState, useEffect } from 'react';
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
  const [products, setProducts] = useState([]);

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
    products,
    setProducts,
  };

  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      const User = [];
      localStorage.setItem('user', JSON.stringify(User));
    }
    if (localStorage.getItem('products') === null) {
      const Products = [];
      localStorage.setItem('products', JSON.stringify(Products));
    }
  }, []);

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
