import React from 'react';

const Login = () => (
  <div>
    <form>
      <label htmlFor="login-input">
        Login
        <input
          type="text"
          placeholder="email@trybeer.com"
          id="login-input"
          data-testid="common_login__input-email"
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="password"
          placeholder="********"
          id="password-input"
          data-testid="common_login__input-password"
        />
      </label>

      <button type="submit" data-testid="common_login__button-login">Login</button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>

      <p id="error-msg" data-testid="common_login__element-invalid-email">erro</p>
    </form>
  </div>
);

export default Login;
