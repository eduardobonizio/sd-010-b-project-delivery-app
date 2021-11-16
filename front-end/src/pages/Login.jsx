import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import API from '../api';

import { validateEmail, validatePassword } from '../util/valdations';

function Login() {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const savePassword = (p) => {
    setPassword(p);
  };

  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    savePassword(value);
    const passwordValidation = validatePassword(value);
    setPasswordIsValid(passwordValidation);
  };

  const saveEmail = (e) => {
    setEmail(e);
  };

  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    saveEmail(value);
    const emailValidation = validateEmail(value);
    setEmailIsValid(emailValidation);
  };

  const redirect = ({ role }) => {
    switch (role) {
    case 'administrator': return history.push('/customer/products');
    case 'customer': return history.push('/customer/products');
    case 'seller': return history.push('/customer/seller');
    default:
      break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await API.login({ email, password });
      redirect(user);
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
        <Link to="/register">
          <button data-testid="common_login__button-register" type="button">
            Ainda não tenho conta
          </button>
        </Link>
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
