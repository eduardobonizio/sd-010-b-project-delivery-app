import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

function LoginForm() {
  const loginInitialState = { user: { role: '' }, message: '', toLogin: false };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(loginInitialState);
  const [customer, setCustomer] = useState(false);
  const [seller, setSeller] = useState(false);
  const [admin, setAdmin] = useState(false);

  function validateLogin() {
    const validator = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    const PASSWORD_MIN_LENGHT = 6;
    if (password.length >= PASSWORD_MIN_LENGHT && validator.test(email)) {
      return true;
    }
    return false;
  }
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
    localStorage.setItem('user', JSON.stringify(loginStatus.user));
    const span = document.getElementById('invalid-message');
    if (loginStatus.message === 'Login invalido') {
      span.style.visibility = 'visible';
    } else {
      span.style.visibility = 'hidden';
    }
  }, [loginStatus, setLoginStatus]);

  useEffect(() => {
    if (loginStatus.user.role === 'customer') {
      setCustomer(true);
    } if (loginStatus.user.role === 'seller') {
      setSeller(true);
    } if (loginStatus.user.role === 'administrator') {
      setAdmin(true);
    }
  }, [loginStatus, setLoginStatus]);

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
          className="login-btn"
          value="LOGIN"
          testId="common_login__button-login"
          onClick={ (e) => clickLogin(e) }
          disabled={ !validateLogin() }
        />
      </form>
    </>

  );
}

export default LoginForm;
