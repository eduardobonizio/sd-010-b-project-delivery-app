/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Cliente',
  });
  const [validUser, setValidUser] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = () => {
    const url = 'http://localhost:3001/products';
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((e) => setError(e));
  };

  const registerUser = () => {
    const url = 'http://localhost:3001/register';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataUser),
    })
      .then((res) => console.log(res))
      .catch((e) => setError(e));
  };

  const validateDataUser = () => {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;
    const MIN_LEN_NAME = 12;

    if (
      validation.test(dataUser.email)
      && dataUser.password.length >= MIN_LEN_PASS
      && dataUser.name.length >= MIN_LEN_NAME
    ) {
      setValidUser(true);
    } else {
      setValidUser(false);
    }
  };

  const changeUserState = ({ target: { name, value } }) => {
    setDataUser({ ...dataUser, [name]: value });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    validateDataUser();
  }, [dataUser]);

  const contextValue = {
    products,
    dataUser,
    setDataUser,
    dataOrder,
    setDataOrder,
    registerUser,
    changeUserState,
    validUser,
    error,
  };

  return (
    <AppContext.Provider value={ { ...contextValue } }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
