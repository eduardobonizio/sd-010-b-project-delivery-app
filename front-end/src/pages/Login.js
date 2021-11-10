import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <input type="email" data-testid="common_login__input-email" />
        <input type="password" data-testid="common_login__input-password" />
        <button type="submit" data-testid="common_login__button-login">
          LGON
        </button>
        <button type="button" data-testid="common_login__button-register">
          AINDA NÃO TENHO CONTA
        </button>
        <span data-testid="common_login__element-invalid-email" />
      </form>
    </div>
  );
}
