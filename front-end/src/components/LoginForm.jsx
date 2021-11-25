import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Context from '../context/Context';

function LoginForm() {
  const loginInitialState = { message: '', toLogin: false };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(loginInitialState);
  const [customer, setCustomer] = useState(false);
  const [seller, setSeller] = useState(false);
  const [admin, setAdmin] = useState(false);

  const { validateLogin } = useContext(Context);

  const clickLogin = (e) => {
    const requestOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password }),
    };
    fetch('http://localhost:3001/users/login', requestOptions)
      .then((response) => response.json())
      .then((data) => setLoginStatus(data));
    e.preventDefault();
  };

  useEffect(() => {
    const span = document.getElementById('invalid-message');
    if (loginStatus.message === 'Login invalido') {
      span.style.visibility = 'visible';
    } else {
      span.style.visibility = 'hidden';
    }
  }, [loginStatus, setLoginStatus]);

  function roleRedirect(role = '') {
    if (role === 'customer') {
      return setCustomer(true);
    } if (role === 'seller') {
      return setSeller(true);
    } if (role === 'administrator') {
      return setAdmin(true);
    }
  }

  function redirectAndLogin() {
    const { user } = loginStatus;
    localStorage.setItem('user', JSON.stringify(user));
    roleRedirect(user.role);
  }

  useEffect(() => {
    const { user } = loginStatus;
    return user ? redirectAndLogin() : null;
  }, [loginStatus, redirectAndLogin, setLoginStatus]);

  return (
    <>
      { customer ? <Redirect to="/customer/products" /> : null }
      { seller ? <Redirect to="/seller/orders" /> : null }
      { admin ? <Redirect to="/admin/manage" /> : null }

      <form>
        <Input
          name="Login"
          id="email"
          testId="common_login__input-email"
          type="text"
          placeholder="email@trybeer.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Input
          name="Senha"
          id="password"
          testId="common_login__input-password"
          type="password"
          placeholder="Digite sua senha"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          formbtn
          id="login-btn"
          className="login__btn"
          value="LOGIN"
          testId="common_login__button-login"
          onClick={ (e) => clickLogin(e) }
          disabled={ !validateLogin(email, password) }
        />
      </form>
    </>

  );
}

export default LoginForm;
