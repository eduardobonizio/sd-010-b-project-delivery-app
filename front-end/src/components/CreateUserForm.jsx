import React, { useState } from 'react';
import axios from 'axios';
import ErrorMessages from './CreateUserFormErrorMessages';

const defaultUser = {
  name: '',
  email: '',
  password: '',
  role: '',
};

const CreateUserForm = () => {
  const [user, setUser] = useState(defaultUser);
  const [errors, setErrors] = useState([]);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const handleChange = ({ target: { value, id } }) => {
    setUser({ ...user, [id]: value });
  };

  const registerUser = async () => {
    const token = JSON.parse(localStorage.getItem('user'));
    await axios({
      method: 'post',
      url: 'http://localhost:3001/admin/manage/register',
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      },
      headers: {
        authorization: token.token,
      },
    })
      .then(() => setAlreadyExists(false))
      .catch(() => setAlreadyExists(true));
  };

  const renderRoleSelect = () => (
    <select id="role" data-testid="admin_manage__select-role" onChange={ handleChange }>
      <option value="" selected disabled hidden>Selecione</option>
      <option>administrator</option>
      <option>seller</option>
      <option>customer</option>
    </select>
  );

  const renderAlreadyExist = () => (
    <p data-testid="admin_manage__element-invalid-register">Usuário já existe</p>
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
          disabled={ errors.length > 0 }
          onClick={ async () => registerUser() }
        >
          CADASTRAR
        </button>
      </form>
      {alreadyExists && renderAlreadyExist()}
      <ErrorMessages
        user={ user }
        errors={ errors }
        setErrors={ setErrors }
      />
    </section>

  );
};

export default CreateUserForm;
