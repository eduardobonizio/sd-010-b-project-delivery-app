import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import fetchAuthUser from '../services/userAPI';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEntry, setIsValidEntry] = useState(true);
  const history = useHistory();

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

    localStorage.setItem('user', JSON.stringify(res));
    if (res.message) {
      setIsValidEntry(false);
    } else if (res.role === 'customer') {
      history.push('/customer/products');
    } else if (res.role === 'seller') {
      history.push('/seller/orders');
    }
  };

  return (
    <div>
      <form onSubmit={ auth }>
        <input
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
