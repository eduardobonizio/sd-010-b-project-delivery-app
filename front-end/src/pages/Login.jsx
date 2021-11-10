import React, { useState } from 'react';
import { login } from '../api';

function Login() {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [emailIsValid, setemailIsValid] = useState(false);
  const [error, setError] = useState(null);

  const validatePassword = (p) => {
    const minLength = 6;
    const isValid = p.length >= minLength;
    setPasswordIsValid(isValid);
  };

  const savePassword = (p) => {
    setPassword(p);
  };

  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    validatePassword(value);
    savePassword(value);
  };

  const validateEmail = (email2) => {
    const emailRe = /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/;
    const isValid = emailRe.test(email2);
    setemailIsValid(isValid);
  };

  const saveEmail = (e) => {
    setemail(e);
  };

  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    validateEmail(value);
    saveEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      await login(user);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>App de Delivery</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            id="email"
            type="email"
            onChange={ handleEmailChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            id="password"
            type="password"
            onChange={ handlePasswordChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !passwordIsValid || !emailIsValid }
        >
          Login
        </button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </form>
      {error && (
        <p data-testid="common_login__element-invalid-email">
          Email ou senha inválidos
        </p>
      )}
    </div>
  );
}

export default Login;
