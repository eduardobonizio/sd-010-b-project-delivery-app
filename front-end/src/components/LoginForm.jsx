import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState({ message: '', toLogin: false });

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
    console.log(requestOptions.body);
    fetch('http://localhost:3001/users/login', requestOptions)
      .then((response) => response.json())
      .then((data) => setLoginStatus(data));
    e.preventDefault();
  };

  useEffect(() => {
    console.log(loginStatus);
    const span = document.getElementById('invalid-message');
    if (loginStatus.message === 'Login invalido') {
      span.style.visibility = 'visible';
    } else {
      span.style.visibility = 'hidden';
    }
  }, [loginStatus, setLoginStatus]);

  return (
    <>
      { loginStatus.toLogin ? <Redirect to="/customer/products" /> : null }
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
