/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import axios from 'axios';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const [dataLogin, setDataLogin] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();

  const login = async () => {
    const url = 'http://localhost:3001/login';
    try {
      const { data } = await axios.post(url, dataLogin);
      if (data.role === 'administrator') {
        history.push('admin/manage');
        return;
      }
      console.log(data);

      history.push('customer/products');
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const getProducts = () => {
    const url = 'http://localhost:3001/products';
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((e) => setError(e));
  };

  const registerUser = async () => {
    const url = 'http://localhost:3001/register';
    try {
      await axios.post(url, dataUser);
      history.push('customer/products');
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const validateDataLogin = () => {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.\D]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;

    if (
      validation.test(dataLogin.email)
      && dataLogin.password.length >= MIN_LEN_PASS
    ) {
      setValidLogin(true);
    } else {
      setValidLogin(false);
    }
  };

  const validateDataUser = () => {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.\D]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
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

  const changeLoginState = ({ target: { name, value } }) => {
    setDataLogin({ ...dataLogin, [name]: value });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const contextValue = {
    products,
    dataUser,
    validUser,
    error,
    dataOrder,
    validLogin,
    login,
    setDataUser,
    changeLoginState,
    setDataOrder,
    registerUser,
    changeUserState,
    validateDataUser,
    validateDataLogin,
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
