import React from 'react';

export default function Login() {
  return (
    <>
      <form>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" data-testid="common_login__input-email" />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
          />
        </label>
      </form>

      <button
        type="submit"
        name="loginButton"
        data-testid="common_login__button-login"
      >
        Login

      </button>

      <button
        type="button"
        name="noAccount"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta

      </button>
    </>
  );
}
