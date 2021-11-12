import React from 'react';

import '../../styles/login.css';

export default function Login() {
  return (
    <div className="login-content">
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
          <button
            type="submit"
            data-testid="common_login__button-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
      <span
        data-testid="common_login__element-invalid-email"
        hidden
      >
        Erro!
      </span>
    </div>
  );
}
