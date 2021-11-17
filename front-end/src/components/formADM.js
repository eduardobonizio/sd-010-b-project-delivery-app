/* eslint-disable max-len */
import React, { useState } from 'react';
import admRegisterAPI from '../services/admRegisterAPI';

export default function FormAdmin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [isValidEntry, setIsValidEntry] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admInfo = JSON.parse(localStorage.getItem('user'));

    const newUser = {
      name,
      email,
      password,
      role,
    };
    const res = await admRegisterAPI(newUser, admInfo.token);
    if (typeof res === 'string') setIsValidEntry(false);
  };

  const buttonActivation = () => {
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAILREGEX = /\S+@\S+\.\S+/;

    const PASSWORDMIN = 6;
    const NAME = 12;
    if (name.length >= NAME
      && email.match(EMAILREGEX) && password.length >= PASSWORDMIN) {
      return false;
    }
    return true;
  };

  const inputStyle = 'border-2 rounded-lg border-yellow-color p-1';
  return (
    <form
      className="m-2 max-w mx-auto"
      onSubmit={ handleSubmit }
    >
      <div>
        <h3>Nome</h3>
        <label className="flex flex-inline m-5" htmlFor>
          <input
            className={ inputStyle }
            onChange={ ({ target }) => setName(target.value) }
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Seu nome"
          />
        </label>
      </div>
      <div>
        <h3>Email</h3>
        <label className="flex flex-inline m-5" htmlFor>
          <input
            className={ inputStyle }
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            data-testid="admin_manage__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
      </div>
      <div>
        <h3>Password</h3>
        <label className="flex flex-inline m-5" htmlFor>
          <input
            className={ inputStyle }
            onChange={ ({ target }) => setPassword(target.value) }
            type="password"
            data-testid="admin_manage__input-password"
            placeholder="********"
          />
        </label>
      </div>
      <div>
        <h3>Tipo</h3>
        <label className="flex flex-inline bg-white p-2 m-5" htmlFor>
          <select
            className={ inputStyle }
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option defaultValue value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
          </select>
        </label>
      </div>
      <button
        disabled={ buttonActivation() }
        type="submit"
        data-testid="admin_manage__button-register"
        className="flex px-2 py-1 text-sm text-black-color border-4 border-teal-500 rounded cursor-pointer bg-yellow-color"
      >
        CADASTRAR
      </button>
      { !isValidEntry
            && (
              <span data-testid="admin_manage__element-invalid-register">
                Erro ao cadastrar.
              </span>
            )}
    </form>
  );
}
