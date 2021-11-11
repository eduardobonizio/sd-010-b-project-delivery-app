import React, { useState } from 'react';
import fetchAuthUser from '../services/userAPI';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isValidEntry, setIsValidEntry] = useState(true);

  const buttonActivation = () => {
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAILREGEX = /\S+@\S+\.\S+/;

    const PASSWORDMIN = 6;
    if (email.match(EMAILREGEX) && password.length >= PASSWORDMIN) {
      return false;
    }
    return true;
  };

  const auth = async (e) => {
    e.preventDefault();
    const res = await fetchAuthUser(email, password);

    console.log(res);
    if (res.message) {
      setIsValidEntry(false);
    }
  };

  return (
    <div>
      <form onSubmit={ auth }>
        Nome
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Seu nome"
        />
        <br />
        Email
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          // onClick={ () => setIsValidEntry(true) }
          type="email"
          data-testid="common_register__input-email"
          placeholder="seu-email@site.com.br"
        />
        <br />
        Senha
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          // onClick={ () => setIsValidEntry(true) }
          type="password"
          data-testid="common_register__input-password"
          placeholder="********"
        />
        <br />
        <button
          disabled={ buttonActivation() }
          type="submit"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
