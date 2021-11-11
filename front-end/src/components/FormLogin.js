import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function FormLogin() {
  const history = useHistory();
  console.log(history);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const PassLength = 6;

  return (
    <form>
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
        disabled={ !(/^[^\s@]+@[^\s@]+.[^\s@]+$/).test(email)
          || pass.length <= PassLength }
        type="submit"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <Link to="/register" data-testid="common_login__button-register">
        Ainda não tenho conta
      </Link>
    </form>
  );
}
