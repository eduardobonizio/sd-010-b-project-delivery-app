import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style';

export default function Login() {
  return (
    <style.CommonContainer>

      <style.LoginContainer />

      <style.CommonForm>
        <style.InputLabel>
          Login
          <br />
          <style.InputEmail data-testid="common_login__input-email" />
        </style.InputLabel>
        <style.InputLabel>
          Senha
          <br />
          <style.InputPassword data-testid="common_login__input-password" />
        </style.InputLabel>
        <style.LoginButton type="submit">Login</style.LoginButton>
        <Link to="/register">
          <style.RegisterButton type="submit">Ainda nao tenho conta</style.RegisterButton>
        </Link>
      </style.CommonForm>
    </style.CommonContainer>
  );
}
