import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import UserList from '../components/UserList';
import handleFetchRegister from '../services/fetchAPIRegister';

export default function Admin() {
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
    <>
      <NavBar />
      <form onSubmit={ handleSubmit }>
        <h2>Cadastrar novo usuario</h2>
        <label htmlFor>
          Nome
          <input
            onChange={ ({ target }) => setName(target.value) }
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Seu nome"
          />
        </label>
        Email
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
          data-testid="admin_manage__input-email"
          placeholder="seu-email@site.com.br"
        />
        Senha
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
          data-testid="admin_manage__input-password"
          placeholder="********"
        />
        <select data-testid="admin_manage__select-role">
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
        <button
          disabled={ buttonActivation() }
          type="submit"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
        { !isValidEntry
            && (
              <span>
                Usuário já existente
              </span>
            )}
      </form>
      <UserList />
    </>
  );
}
