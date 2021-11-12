import React from 'react';

const RegisterComponent = () => (
  <section className="container-register">
    <div>
      <h3>Cadastro</h3>
    </div>
    <div className="form-register">
      <label className="label-register" htmlFor="name">
        Nome
        <input
          data-testid="common_register__input-name"
          className="input-general"
          type="text"
          name="name"
        />
      </label>
      <label className="label-register" htmlFor="email">
        Email
        <input
          data-testid="common_register__input-email"
          className="input-general"
          type="text"
          name="email"
        />
      </label>
      <label className="label-register" htmlFor="password">
        Senha
        <input
          data-testid="common_register__input-password"
          className="input-general"
          type="password"
          name="password"
        />
      </label>
      <button
        data-testid="common_register__button-register"
        className="btn-general"
        type="button"
      >
        CADASTRAR
      </button>
    </div>
  </section>
);

export default RegisterComponent;
