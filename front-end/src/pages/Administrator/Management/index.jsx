import React, { useState, useEffect } from 'react';
import isValidRegister from '../../../helpers/validRegister';
import apiAdmCreateUser from '../../../services/register/apiRequestAdmRegister';
import { getFromLocalStorage } from '../../../helpers/localStorage';

export default function Management() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const tryRegister = async (e) => {
    e.preventDefault();
    const user = getFromLocalStorage('user');
    const result = await apiAdmCreateUser({ name, email, password, role }, user.token);
    console.log(result);
  };

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
      </form>
    </div>
  );
}
