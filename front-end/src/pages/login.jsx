import React, { useState } from 'react';

const Login = () => {
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [passwordInput, setPassword] = useState('');
  const [emailInput, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+){2,4}?$/i;
    if (regexEmail.test(email)) {
      setInvalidEmail(false);
      setErrorMessage('');
    } else {
      setInvalidEmail(true);
      setErrorMessage('* Invalid email');
    }
  };

  const validatePassword = (password) => {
    const PasswordMinLength = 6;
    if (password.length >= PasswordMinLength) {
      setInvalidPassword(false);
      setErrorMessage('');
    } else {
      setInvalidPassword(true);
      setErrorMessage('* Invalid password');
    }
  };

  const attemptLogin = () => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <label htmlFor="email">
        <input
          value={ emailInput }
          onChange={ ({ target }) => validateEmail(target.value) }
          name="email"
          id="email"
          type="text"
          data-testid="common_login__input-email"
        />
      </label>
      <label htmlFor="password">
        <input
          value={ passwordInput }
          onChange={ ({ target }) => validatePassword(target.value) }
          name="password"
          id="password"
          type="password"
          data-testid="common_login__input-password"
        />
      </label>
      <button
        onClick={ attemptLogin }
        disabled={ invalidPassword || invalidEmail }
        type="button"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Cadastrar
      </button>
      <div data-testid="common_login__element-invalid-email">{ errorMessage }</div>
    </div>
  );
};

export default Login;
