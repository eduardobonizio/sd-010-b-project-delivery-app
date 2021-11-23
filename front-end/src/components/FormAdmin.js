import React, { useEffect, useState } from 'react';
import { getUserList, registerUser } from '../services/api';

function FormAdmin() {
  const [userRegister, setUserRegister] = useState(
    { name: '', email: '', password: '', role: '' },
  );
  const [userRegisterList, setUserRegisterList] = useState([]);
  const [err, setErr] = useState(false);
  const PassLength = 6;
  const NameLength = 12;
  const threeSecond = 3000;

  useEffect(() => {
    getUserList().then(({ data }) => {
      setUserRegisterList(data);
    });
  }, [userRegisterList]);

  async function userRegisterDataBase(userInfo) {
    const user = await registerUser(userInfo);
    if (user.statusText) {
      setErr(true);
      return setTimeout(() => setErr(false), threeSecond);
    }
  }

  function getinfo({ target: { name, value } }) {
    if (name === 'userName') {
      return setUserRegister({ ...userRegister, name: value });
    }
    if (name === 'userEmail') {
      return setUserRegister({ ...userRegister, email: value });
    }
    if (name === 'userPassword') {
      return setUserRegister({ ...userRegister, password: value });
    }
    if (name === 'userRole') {
      return setUserRegister({ ...userRegister, role: value });
    }
  }

  return (
    <>
      <form
        onSubmit={ (event) => event.preventDefault() }
      >
        <p>Cadastrar novo usuário</p>
        <label htmlFor="userName">
          <p>Nome:</p>
          <input
            id="userName"
            name="userName"
            type="text"
            data-testid="admin_manage__input-name"
            onChange={ getinfo }
          />
        </label>
        <label htmlFor="userEmail">
          <p>E-Mail</p>
          <input
            id="userEmail"
            name="userEmail"
            type="text"
            data-testid="admin_manage__input-email"
            onChange={ getinfo }
          />
        </label>
        <label htmlFor="userPassword">
          <p>Senha</p>
          <input
            id="userPassword"
            name="userPassword"
            type="text"
            data-testid="admin_manage__input-password"
            onChange={ getinfo }
          />
        </label>
        <label htmlFor="userRole">
          <p>Tipo</p>
          <select
            id="userRole"
            name="userRole"
            type="text"
            data-testid="admin_manage__select-role"
            onChange={ getinfo }
          >
            <option selected> - </option>
            <option value="seller"> Vendedor </option>
            <option value="customer"> Usuário </option>
          </select>
        </label>
        <button
          className="submit-order"
          data-testid="admin_manage__button-register"
          type="submit"
          onClick={ () => userRegisterDataBase(userRegister) }
          disabled={ !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/
            .test(userRegister.email))
          || userRegister.password.length < PassLength
          || userRegister.name.length < NameLength }
        >
          Cadastrar
        </button>
        { err && (
          <p
            className="message-error"
            data-testid="admin_manage__element-invalid-register"
          >
            Login já é cadastrado

          </p>) }
      </form>
      <p>Lista de usuários:</p>
      <ul>
        <li>
          <span>
            Item
          </span>
          <span>
            Nome
          </span>
          <span>
            E-Mail
          </span>
          <span>
            Tipo
          </span>
        </li>
      </ul>

      <ul>
        { userRegisterList.map((user, i) => (
          <li key={ user.email }>
            <span
              className="userId"
              data-testid={ `admin_manage__element-user-table-item-number-${i}` }
            >
              {i + 1}
            </span>
            <span
              className="userName"
              data-testid={ `admin_manage__element-user-table-name-${i}` }
            >
              {user.name}
            </span>
            <span
              className="userEmail"
              data-testid={ `admin_manage__element-user-table-email-${i}` }
            >
              {user.email}
            </span>
            <span
              className="userRole"
              data-testid={ `admin_manage__element-user-table-role-${i}` }
            >
              {user.role}
            </span>
            <button
              className="removeUser"
              data-testid={ `admin_manage__element-user-table-remove-${i}` }
              type="submit"
              onClick={ () => { console.log('apagou'); } }
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FormAdmin;
