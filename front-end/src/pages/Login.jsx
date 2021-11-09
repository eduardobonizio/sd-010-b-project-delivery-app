import React from 'react';

function Login() {
  return (
    <div>
      <h1>App de Delivery</h1>
      <form>
        <label htmlFor="email">
          Login
          <input data-testid="common_login__input-email" id="email" type="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input data-testid="common_login__input-password" id="password" type="email" />
        </label>
        <button data-testid="common_login__button-login" type="button">Login</button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email" />
    </div>
  );
}

export default Login;
