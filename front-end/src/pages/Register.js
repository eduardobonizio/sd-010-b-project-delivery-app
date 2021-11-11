import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import handleFetch from '../services/userAPI';

const URLREGISTER = 'http://localhost:3001/register';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEntry, setIsValidEntry] = useState(true);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await handleFetch({ name, email, password }, URLREGISTER);
    console.log(res);
    localStorage.setItem('user', JSON.stringify(res));
    console.log(res, 'register 18');
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
    if (email.match(EMAILREGEX) && password.length > PASSWORDMIN) {
      return false;
    }
    return true;
  };

  return (
    <div>
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
        { !isValidEntry
          && (
            <span data-testid="common_login__element-invalid-email">
              Usuário não encontrado
            </span>
          )}
      </form>
    </div>
  );
}
