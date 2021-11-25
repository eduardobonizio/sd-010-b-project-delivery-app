import React, { useState, useEffect } from 'react';
import isValidRegister from '../../../helpers/validRegister';
import apiRequestAdmin from '../../../services/register/apiRequestAdmin';
import { getFromLocalStorage } from '../../../helpers/localStorage';
import TableUsers from '../../../components/TableUsers';
import { apiGetAllUsers } from '../../../services/login/apiRequestLogin';

export default function Management() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [erro] = useState();
  const [listUser, setListUser] = useState();

  const tryRegister = async (e) => {
    e.preventDefault();
    const user = getFromLocalStorage('user');
    const result = await apiRequestAdmin({ name, email, password, role }, user.token);
    console.log(result);
    const allUsers = await apiGetAllUsers();
    setListUser(allUsers);
  };

  useEffect(() => {
    const allUsers = async () => {
      const result = await apiGetAllUsers();
      setListUser(result);
    };
    allUsers();
  }, []);

  useEffect(() => {
    const isValid = isValidRegister(name, email, password);
    setBtnDisable(isValid);
  }, [name, email, password]);

  return (
    <div>
      <form>
        Nome
        <input
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ (e) => setName(e.target.value) }
        />
        Email
        <input
          type="text"
          data-testid="admin_manage__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        Password
        <input
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <select
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
        >
          <option defaultValue>SELECIONE</option>
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
        <button
          type="submit"
          disabled={ btnDisable }
          data-testid="admin_manage__button-register"
          onClick={ (e) => tryRegister(e) }
        >
          BOTÃO
        </button>
        <p
          id="erro"
          data-testid="admin_manage__element-invalid-register"
        >
          {' '}
          { erro ? 'Deu erro' : ' ' }
        </p>
      </form>
      {listUser && listUser.map((list, index) => (
        <TableUsers
          key={ index }
          id={ list.id }
          name={ list.name }
          email={ list.email }
          role={ list.role }
        />
      ))}
    </div>
  );
}
