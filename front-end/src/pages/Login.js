import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginValidation = () => {
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php

    const EMAILREGEX = /\S+@\S+\.\S+/;

    const PASSWORDMIN = 6;
    if (email.match(EMAILREGEX) && password.length >= PASSWORDMIN) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <form>
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
          data-testid="common_login__input-email"
        />
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
          data-testid="common_login__input-password"
        />
        <button
          disabled={ loginValidation() }
          type="submit"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button type="button" data-testid="common_login__button-register">
          AINDA NÃO TENHO CONTA
        </button>
        <span data-testid="common_login__element-invalid-email" />
      </form>
    </div>
  );
}
