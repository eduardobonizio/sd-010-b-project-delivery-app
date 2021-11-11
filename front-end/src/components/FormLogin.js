import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../services/api';
import { createStorage } from '../utils/localStorage';

export default function FormLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // const [err, setErr] = useState('');

  const PassLength = 6;

  async function submit(e) {
    e.preventDefault();
    const user =  await login({ email, password: pass });
    console.log(user.data[0]);
    if (user.message) {
      return user;
    }
    createStorage('user', user.data[0]);
    history.push('/customer/products');
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
      <button type="button" data-testid="common_login__button-register">
        <Link to="/register">
          Ainda não tenho conta
        </Link>
      </button>
    </form>
  );
}
