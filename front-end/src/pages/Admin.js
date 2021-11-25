import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';

export default function Admin() {
  const {
    changeUserState,
    validUser,
    // error,
    registerUser,
    validateDataUser,
  } = useContext(AppContext);

  useEffect(() => {
    validateDataUser();
  }, [changeUserState, validateDataUser]);

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
          onChange={ changeUserState }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          data-testid="admin_manage__input-email"
          onChange={ changeUserState }
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          name="password"
          data-testid="admin_manage__input-password"
          onChange={ changeUserState }
        />
      </label>

      <button
        type="button"
        data-testid="admin_manage__button"
        onClick={ registerUser }
        disabled={ !validUser }
      >
        Login
      </button>
    </div>
  );
}
