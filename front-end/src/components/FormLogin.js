import React, { useState } from 'react';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
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
        type="submit"
      >
        Login
      </button>
      <button
        type="submit"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}
