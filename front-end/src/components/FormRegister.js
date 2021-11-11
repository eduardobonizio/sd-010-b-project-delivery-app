import React, { useState } from 'react';

export default function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const PassLength = 6;
  const NameLength = 12;

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          value={ name }
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          value={ email }
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          value={ pass }
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPass(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ !(/^[^\s@]+@[^\s@]+.[^\s@]+$/).test(email)
          || pass.length <= PassLength
          || name.length <= NameLength }
      >
        Cadastro
      </button>
    </form>
  );
}
