import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateLogin() {
    const emailRegex = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z_.]{2,7}$/;
    const NAME_MIN_LENGTH = 12;
    const PASSWORD_MIN_LENGHT = 6;
    const validation = password.length >= PASSWORD_MIN_LENGHT
      && name.length >= NAME_MIN_LENGTH
      && emailRegex.test(email);
    if (validation) {
      return true;
    }
    return false;
  }

  return (
    <form>
      <Input
        name="Nome"
        id="name"
        testId="common_register__input-name"
        type="text"
        placeholder="Digite seu nome"
        onChange={ (e) => setName(e.target.value) }
      />
      <Input
        name="Email"
        id="email"
        testId="common_register__input-email"
        type="text"
        placeholder="Digite seu email"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        name="Senha"
        id="password"
        testId="common_register__input-password"
        type="password"
        placeholder="Digite sua senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Button
        formbtn
        id="register-btn"
        className="login-btn"
        value="REGISTER"
        testId="common_register__button-register"
        onClick={ (e) => e.preventDefault() }
        disabled={ !validateLogin() }
      />
    </form>
  );
}

export default RegisterForm;
