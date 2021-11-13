import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import handleFetchRegister from '../services/fetchAPIRegister';

export default function Register() {
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
    <form onSubmit={ handleSubmit }>
      Nome
      <input
        onChange={ ({ target }) => setName(target.value) }
        type="text"
        data-testid="common_register__input-name"
        placeholder="Seu nome"
      />
      <br />
      Email
      <input
        onChange={ ({ target }) => setEmail(target.value) }
        type="email"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
      />
      <br />
      Senha
      <input
        onChange={ ({ target }) => setPassword(target.value) }
        type="password"
        data-testid="common_register__input-password"
        placeholder="********"
      />
      <button
        disabled={ buttonActivation() }
        type="submit"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      { !isValidEntry
          && (
            <span data-testid="common_register__element-invalid_register">
              Usuário já existente
            </span>
          )}
    </form>
  );
}
