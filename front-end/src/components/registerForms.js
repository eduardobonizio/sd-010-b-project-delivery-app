/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import handleFetchRegister from '../services/fetchAPIRegister';

export default function RegisterForms({ registerFunc }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEntry, setIsValidEntry] = useState(true);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await handleFetchRegister(name, email, password);
    localStorage.setItem('user', JSON.stringify(res));
    if (res.message) {
      setIsValidEntry(false);
    } else {
      history.push('/customer/products');
    }
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
  return (
    <div className="border-l-2 pl-28 border-gray-300 flex flex-col items-center justify-center max-w-lg p-10" data-aos="fade-left">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-yellow-color" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
      <p className="mt-6 text-4xl text-gray-800 ">Cadastrar uma conta</p>
      <form data-testid="form-login" onSubmit={ handleSubmit } className="w-full mt-6 space-y-10">
        <div className="py-2 space-y-2 border-b border-yellow-color">
          <p className="text-md ext-gray-800">Qual o seu nome?</p>
          <input
            onChange={ ({ target }) => setName(target.value) }
            type="text"
            data-testid="common_register__input-name"
            placeholder="seu nome"
            required
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          />
        </div>
        <div className="py-2 space-y-2 border-b border-yellow-color">
          <p className="text-md ext-gray-800">Qual o seu email?</p>
          <input
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            data-testid="common_register__input-email"
            required
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            placeholder="nome@nome.com"
          />
        </div>
        <div className="py-2 border-b border-yellow-color">
          <p className="text-md ext-gray-800">Digite a sua senha:</p>
          <input
            onChange={ ({ target }) => setPassword(target.value) }
            type="password"
            data-testid="common_register__input-password"
            required
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            placeholder="•••••••••"
          />
        </div>
        <div className="flex space-x-10">
          <button
            disabled={ buttonActivation() }
            type="submit"
            data-testid="common_login__button-login"
            className="flex px-2 py-1 text-sm text-black-color border-4 border-teal-500 rounded cursor-pointer bg-yellow-color"
          >
            Cadastrar
          </button>

          <button
            onClick={ () => registerFunc(true) }
            type="button"
            className="flex px-2 py-1 text-sm text-yellow-color border-4 border-teal-500 rounded cursor-pointer bg-dark-color"
          >
            Voltar
          </button>
        </div>
        { !isValidEntry
              && (
                <span data-testid="common_register__element-invalid_register">
                  Usuário já existente
                </span>
              )}
      </form>
    </div>
  );
}

RegisterForms.propTypes = {
  registerFunc: PropTypes.func,
}.isRequired;
