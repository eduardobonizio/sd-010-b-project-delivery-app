import React from 'react';

import '../../styles/login.css';

export default function Login() {
  return (
    <form action="">
      <div>
        <label htmlFor="email">
          Login
          <input type="text" name="email" data-testid="common_login__input-email" />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
          />
        </label>
        <input type="submit" value="LOGIN" data-testid="common_login__button-login" />
        <input
          type="button"
          value="Ainda não tenho conta"
          data-testid="common_login__button-register"
        />
      </div>
    </form>
  );
}
