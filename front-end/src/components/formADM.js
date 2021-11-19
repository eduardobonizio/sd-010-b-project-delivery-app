/* eslint-disable max-len */
import React, { useState } from 'react';
import admRegisterAPI from '../services/admRegisterAPI';
import SelectType from './selectType';

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

  const h3 = 'text-xl ml-10';
  const label = 'flex flex-inline m-5';

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex flex-col ml-16 mr-16"
    >
      <div className="flex justify-around m-2 mt-10">
        <div>
          <h3 className={ h3 }>
            Nome
          </h3>
          <label className={ label } htmlFor>
            <input
              className="p-3 text-xl border-2 border-b-8 border-r-8 focus:outline-none rounded-2xl border-yellow-color"
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
              className="p-3 text-xl border-2 border-b-8 border-r-8 focus:outline-none rounded-2xl border-yellow-color"
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
              className="p-3 text-xl border-2 border-b-8 border-r-8 focus:outline-none rounded-2xl border-yellow-color"
              onChange={ ({ target }) => setPassword(target.value) }
              type="password"
              data-testid="admin_manage__input-password"
              placeholder="********"
            />
          </label>
        </div>
        <div>
          <h3 className={ h3 }>Tipo</h3>
          <SelectType role={ ({ target }) => setRole(target.value) } />
        </div>
      </div>
      <button
        disabled={ buttonActivation() }
        type="submit"
        data-testid="admin_manage__button-register"
        className="self-end py-2 mt-4 mr-20 rounded-md cursor-pointer px-7 text-black-color bg-yellow-color"
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
