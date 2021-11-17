/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { fetchAuthUser } from '../services/userAPI';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEntry, setIsValidEntry] = useState(true);
  const history = useHistory();

  const buttonActivation = () => {
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAILREGEX = /\S+@\S+\.\S+/;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      if (user.role === 'customer') {
        history.push('/customer/products');
      } else if (user.role === 'seller') {
        history.push('/seller/orders');
      }
    }

    const PASSWORDMIN = 6;
    if (email.match(EMAILREGEX) && password.length >= PASSWORDMIN) {
      return false;
    }
    return true;
  };

  const auth = async (e) => {
    e.preventDefault();
    const res = await fetchAuthUser(email, password);

    localStorage.setItem('user', JSON.stringify(res));

    switch (res.role) {
    case 'customer':
      history.push('/customer/products');
      break;
    case 'seller':
      history.push('/seller/orders');
      break;
    case 'administrator':
      history.push('/admin/manage');
      break;
    default:
      setIsValidEntry(false);
      break;
    }
  };

  return (
    <div className=" sgfsgfs sgfs sgfsgssfgsf sgfssfs sffffffffffbg-yellow-color flex-col text-dark-color">
      <form className="flex flex-col" onSubmit={ auth }>
        <input
          className="border-2 border-yellow-color"
          onChange={ ({ target }) => setEmail(target.value) }
          onClick={ () => setIsValidEntry(true) }
          type="email"
          data-testid="common_login__input-email"
        />
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          onClick={ () => setIsValidEntry(true) }
          type="password"
          data-testid="common_login__input-password"
        />
        <button
          disabled={ buttonActivation() }
          type="submit"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <Link to="/register">
          <button type="button" data-testid="common_login__button-register">
            AINDA NÃO TENHO CONTA
          </button>
        </Link>
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
