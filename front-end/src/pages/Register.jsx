import React from 'react';
import ErrorRegister from '../components/ErrorRegister';

function Register() {
  return (
    <form>
      <input
        data-testid="common_register__input-name"
        type="text"
        name="nome"
        id="nome"
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        name="e-mail"
        id="e-mail"
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        name="password"
        id="password"
      />
      <input
        data-testid="common_register__button-register"
        type="button"
        value="Cadastrar"
      />
      { errorMsg ? <ErrorRegister /> : '' }
    </form>
  );
}

export default Register;
