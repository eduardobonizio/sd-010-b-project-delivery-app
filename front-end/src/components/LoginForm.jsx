import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateLogin() {
    const validator = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    const PASSWORD_MIN_LENGHT = 6;
    if (password.length > PASSWORD_MIN_LENGHT && validator.test(email)) {
      return true;
    }
    return false;
  }

  return (
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
        data-testeid="common_login__button-login"
        onClick={ (e) => e.preventDefault() }
        disabled={ !validateLogin() }
      />
    </form>
  );
}

export default LoginForm;
