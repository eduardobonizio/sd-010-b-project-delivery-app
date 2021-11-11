import React from 'react';

function Register() {
  return (
    <div>
      <form>
        <label htmlFor="login-input">
          Nome
          <input
            type="text"
            placeholder="Seu nome"
            id="name-input"
            name="name"
            data-testid="common_register__input-name"
            // onChange={ handleChange }
            // value={ name }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            placeholder="email@trybeer.com"
            id="email-input"
            name="email"
            data-testid="common_register__input-email"
            // onChange={ handleChange }
            // value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="********"
            id="password-input"
            name="password"
            data-testid="common_register__input-password"
            // onChange={ handleChange }
            // value={ password }
          />
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>

        <p id="error-msg" data-testid="common_register__element-invalid_register">erro</p>
      </form>
    </div>
  );
}

export default Register;
