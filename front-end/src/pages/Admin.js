import React from 'react';

export default function Admin() {
  return (
    <div>
      <h1>Cadastrar novo usuário</h1>

      <label htmlFor="email">
        Nome
        <input
          type="text"
          id="name"
          name="name"
          data-testid="admin_manage__input-name"
          onChange={ () => {} }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          data-testid="admin_manage__input-email"
          onChange={ () => {} }
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          name="password"
          data-testid="admin_manage__input-password"
          onChange={ () => {} }
        />
      </label>

      <button
        type="button"
        data-testid="admin_manage__button"
        onClick={ () => getApi() }
        disabled
      >
        Login
      </button>
    </div>
  );
}
