/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [disableBtn, setDisableBtn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);

  const validateData = () => {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;

    if (validation.test(login.email) && login.password.length >= MIN_LEN_PASS) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const changeState = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
    validateData();
  };

  const lintChato = 'common_login__element-invalid-email';

  useEffect(() => {
    validateData();
  }, [login, validateData]);

  const getApi = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', login);

      console.log(data);
      setIsRedirect(true);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (e) {
      setErrorMessage(e.response.data.message);
      console.log(e.response.data.message);

      setIsError(true);
    }
  };

  return (
    <div>
      { isRedirect && <Redirect to="/customer/products" />}

      <h1>Login page</h1>

      <label htmlFor="email-login">
        Login
        <input
          type="email"
          id="email-login"
          name="email"
          data-testid="common_login__input-email"
          onChange={ changeState }
        />
      </label>

      <label htmlFor="password-login">
        Senha
        <input
          type="password"
          id="password-login"
          name="password"
          data-testid="common_login__input-password"
          onChange={ changeState }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        onClick={ () => getApi() }
        disabled={ disableBtn }
      >
        Login
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>

      { isError && <div data-testid={ lintChato }>{ errorMessage }</div> }

    </div>
  );
}

export default Login;
