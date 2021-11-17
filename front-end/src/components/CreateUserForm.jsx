import React, { useState } from 'react';
import CreateUserFormErrorMessages from './CreateUserFormErrorMessages';

const defaultUser = {
  name: '',
  email: '',
  password: '',
  role: '',
};

const CreateUserForm = () => {
  console.log('bah');
  const [user, setUser] = useState(defaultUser);

  const handleChange = ({ target: { value, id } }) => {
    console.log(value, id);
    setUser({ ...user, [id]: value });
  };

  const renderRoleSelect = () => (
    <select id="role" data-testid="admin_manage__select-role" onChange={ handleChange }>
      <option value="" selected disabled hidden>Selecione</option>
      <option>administrator</option>
      <option>seller</option>
      <option>customer</option>
    </select>
  );

  return (
    <section>
      <h2>Cadastrar novo usuário</h2>
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            data-testid="admin_manage__input-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            data-testid="admin_manage__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="text"
            data-testid="admin_manage__input-password"
            onChange={ handleChange }
          />
        </label>
        { renderRoleSelect() }
        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR

        </button>
      </form>
      <CreateUserFormErrorMessages user={ user } />
    </section>

  );
};

export default CreateUserForm;
