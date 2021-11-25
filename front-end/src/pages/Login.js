/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../Context/AppContext';

function Login() {
  const {
    changeLoginState,
    login,
    error,
    validLogin,
    validateDataLogin,
  } = useContext(AppContext);

  useEffect(() => {
    validateDataLogin();
  }, [changeLoginState, validateDataLogin]);

  return (
    <div>
      <h1>Login page</h1>

      <label htmlFor="email-login">
        Login
        <input
          type="email"
          id="email-login"
          name="email"
          data-testid="common_login__input-email"
          onChange={ changeLoginState }
        />
      </label>

      <label htmlFor="password-login">
        Senha
        <input
          type="password"
          id="password-login"
          name="password"
          data-testid="common_login__input-password"
          onChange={ changeLoginState }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        onClick={ login }
        disabled={ !validLogin }
      >
        Login
      </button>
      <button type="button" data-testid="common_login__button-register">
        <Link to="/register">Ainda não tenho conta</Link>
      </button>

      {error && (
        <div data-testid="common_login__element-invalid-email">{error}</div>
      )}
    </div>
  );
}

export default Login;
