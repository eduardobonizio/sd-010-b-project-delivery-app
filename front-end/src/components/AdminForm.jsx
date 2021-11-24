import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [userStatus, setUserStatus] = useState({ message: '', redirect: false });

  function validateLogin() {
    const emailRegex = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    const NAME_MIN_LENGTH = 12;
    const PASSWORD_MIN_LENGHT = 6;
    const validation = password.length >= PASSWORD_MIN_LENGHT
      && name.length >= NAME_MIN_LENGTH
      && emailRegex.test(email);
    return validation;
  }
  function registerUser(e) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    e.preventDefault();
    const requestOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: token,

      },
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    };

    fetch('http://localhost:3001/users/adm/register', requestOptions)
      .then((res) => res.json())
      .then((data) => setUserStatus(data));
  }

  React.useEffect(() => {
    const span = document.getElementById('invalid-message');
    span.innerHTML = userStatus.message;
    if (userStatus.message !== '') {
      span.style.visibility = 'visible';
    } else {
      span.style.visibility = 'hidden';
    }
  }, [userStatus]);

  return (
    <div>
      <form className="admin_form">
        <Input
          name="Nome"
          id="name"
          testId="admin_manage__input-name"
          type="text"
          placeholder="Digite seu nome"
          onChange={ (e) => setName(e.target.value) }
        />
        <Input
          name="Email"
          id="email"
          testId="admin_manage__input-email"
          type="text"
          placeholder="Digite seu email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Input
          name="Senha"
          id="password"
          testId="admin_manage__input-password"
          type="password"
          placeholder="Digite sua senha"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <label htmlFor="role">
          Tipo
          <select
            name="role"
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller" selected>Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <Button
          formbtn
          id="register-btn"
          className="login-btn"
          value="CADASTRAR"
          testId="admin_manage__button-register"
          onClick={ (e) => registerUser(e) }
          disabled={ !validateLogin() }
        />
      </form>
    </div>
  );
}
