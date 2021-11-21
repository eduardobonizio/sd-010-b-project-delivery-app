import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';

function Register() {
  const {
    changeUserState,
    validUser,
    error,
    registerUser,
    validateDataUser,
  } = useContext(AppContext);

  useEffect(() => {
    validateDataUser();
  }, [changeUserState, validateDataUser]);

  return (
    <div>
      <h1>Register page</h1>

      <label htmlFor="name-register">
        Nome
        <input
          type="text"
          id="name-register"
          name="name"
          data-testid="common_register__input-name"
          onChange={ changeUserState }
        />
      </label>
      <label htmlFor="email-register">
        Email
        <input
          type="email"
          id="email-register"
          name="email"
          data-testid="common_register__input-email"
          onChange={ changeUserState }
        />
      </label>

      <label htmlFor="password-register">
        Senha
        <input
          type="password"
          id="password-register"
          name="password"
          data-testid="common_register__input-password"
          onChange={ changeUserState }
        />
      </label>

      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ registerUser }
        disabled={ !validUser }
      >
        Cadastrar
      </button>

      {error && (
        <div data-testid="common_register__element-invalid_register">
          {error}
        </div>
      )}
    </div>
  );
}

export default Register;
