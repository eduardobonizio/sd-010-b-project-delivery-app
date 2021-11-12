import React from 'react';

export default function Register() {
  return (
    <>
      <h1>Cadastro</h1>
      <div display="row">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            data-testid="common_register__input-password"
            placeholder="******"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          CADASTRAR
        </button>
        <p>{' '}</p>
      </div>
    </>
  );
}
