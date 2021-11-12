import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from './style';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  console.log(email);
  console.log(password);

  return (
    <style.CommonContainer>

      <style.LoginContainer />

      <style.CommonForm>
        <style.InputLabel>
          Login
          <br />
          <style.InputEmail
            type="text"
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_login__input-email"
          />
        </style.InputLabel>
        <style.InputLabel>
          Senha
          <br />
          <style.InputPassword
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_login__input-password"
          />
        </style.InputLabel>
        <style.LoginButton
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </style.LoginButton>
        <Link to="/register" data-testid="common_login__button-register">
          <style.RegisterButton type="submit">Ainda nao tenho conta</style.RegisterButton>
        </Link>
        <p
          id="erro"
          data-testid={ `common_login__element-invalid-email${'elemento'}` }
        >
          {' '}
        </p>

      </style.CommonForm>
    </style.CommonContainer>
  );
}
