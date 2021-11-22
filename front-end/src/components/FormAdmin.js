import React, { useState } from 'react'

function FormAdmin() {
  const [userRegister, setUserRegister] = useState({ name: '', email: '', password:'', role:''  });

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
    return setUserRegister({ ...userRegister, role: value });
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
          <p>Endereço</p>
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
            <option> Vendedor </option>
            <option> Usuário </option>
          </select>
        </label>
        <button
          className="submit-order"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          onClick={ () => console.log('muda') }
        >
          Cadastrar
        </button>
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
            <li>
              <span
                className="userId"
                data-testid={ `admin_manage__element-user-table-item-number-` }
              >
                0
              </span>
              <span
                className="userName"
                data-testid={ `admin_manage__element-user-table-name-` }
              >
                noomedousuario
              </span>
              <span
                className="userEmail"
                data-testid={ `admin_manage__element-user-table-email-` }
              >
                email@email.com
              </span>
              <span
                className="userRole"
                data-testid={ `admin_manage__element-user-table-role-` }
              >
                tipodeusuario
              </span>
              <button
                className="removeUser"
                data-testid={ `admin_manage__element-user-table-remove-}` }
                type="submit"
                onClick={ () => {console.log('apagou') } }
              >
                Excluir
              </button>
            </li>
          </ul>
    </>
  )
}

export default FormAdmin
