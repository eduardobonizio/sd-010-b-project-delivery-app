import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../services/api';
import { createStorage, getStorage } from '../utils/localStorage';

export default function FormLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(false);

  const verifyLogin = () => getStorage('user') && history.push('/customer/products');
  verifyLogin();

  const PassLength = 6;
  const threeSecond = 3000;

  async function submit(e) {
    e.preventDefault();
    const userId = await login({ email, password: pass });
    console.log(userId);
    if (userId.message) {
      setErr(true);
      return setTimeout(() => setErr(false), threeSecond);
    }
    const { data: [user] } = userId;
    createStorage('user', userId.data[0]);
    if (user.role === 'administrator') {
      return history.push('/admin/manage');
    } if (user.role === 'seller') {
      return history.push('/seller/orders');
    }
    if (user.role === 'customer') {
      return history.push('/customer/products');
    }
  }

  return (
    <form onSubmit={ (e) => submit(e) }>
      <label htmlFor="email">
        <input
          id="email"
          value={ email }
          data-testid="common_login__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          value={ pass }
          data-testid="common_login__input-password"
          onChange={ ({ target }) => setPass(target.value) }
        />
      </label>
      <button
        disabled={ !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))
          || pass.length < PassLength }
        type="submit"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      { err && (
        <p
          className="message-error"
          data-testid="common_login__element-invalid-email"
        >
          Login ou senha invalidos

        </p>) }
      <button type="button" data-testid="common_login__button-register">
        <Link to="/register">
          Ainda não tenho conta
        </Link>
      </button>
    </form>
  );
}
