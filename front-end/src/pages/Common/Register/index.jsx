import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from '../style';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  console.log(email);
  console.log(password);
  console.log(name);

  return (
    <style.CommonContainer>

      <style.LoginContainer />

      <style.CommonForm>
        <style.InputLabel>
          Nome
          <br />
          <style.CommonInput
            type="text"
            onChange={ (e) => setName(e.target.value) }
            data-testid="common_register__input-name"
          />
        </style.InputLabel>

        <style.InputLabel>
          Email
          <br />
          <style.CommonInput
            type="text"
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_register__input-email"
          />
        </style.InputLabel>

        <style.InputLabel>
          Senha
          <br />
          <style.CommonInput
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_register__input-password"
          />
        </style.InputLabel>

        <style.LoginButton
          type="submit"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </style.LoginButton>
        <Link to="/login">
          <style.RegisterButton type="submit">Fazer login</style.RegisterButton>
        </Link>
        <p
          id="erro"
          data-testid="common_register__element-invalid_register"
        >
          {' '}
        </p>

      </style.CommonForm>
    </style.CommonContainer>
  );
}
