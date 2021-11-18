/* eslint-disable react/jsx-max-depth */
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

  const inputStyle = 'border-2 border-b-8 border-r-8 text-xl rounded-2xl border-yellow-color p-3';
  const h3 = 'text-xl ml-10';
  const label = 'flex flex-inline m-5 sm:';

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex flex-col"
    >
      <div className="flex mt-5 m-2 justify-around">
        <div>
          <h3 className={ h3 }>Nome</h3>
          <label className={ label } htmlFor>
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
          <h3 className={ h3 }>Email</h3>
          <label className={ label } htmlFor>
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
          <h3 className={ h3 }>Password</h3>
          <label className={ label } htmlFor>
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
          <h3 className={ h3 }>Tipo</h3>
          <label className={ label } htmlFor>
            <select
              className={ `${inputStyle} bg-white px-10` }
              data-testid="admin_manage__select-role"
              onChange={ ({ target }) => setRole(target.value) }
            >
              <option defaultValue value="customer">Cliente</option>
              <option value="seller">Vendedor</option>
            </select>
          </label>
        </div>
      </div>
      <button
        disabled={ buttonActivation() }
        type="submit"
        data-testid="admin_manage__button-register"
        className="px-7 py-2 text-black-color rounded-xl cursor-pointer bg-yellow-color self-end mr-60"
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
