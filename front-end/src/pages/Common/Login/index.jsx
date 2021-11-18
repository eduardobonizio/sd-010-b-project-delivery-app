import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './style';
import { apiRequestLogin } from '../../../services/login/apiRequestLogin';
import { setOnLocalStorage } from '../../../helpers/localStorage';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [erro] = useState();
  const [user, setUser] = useState();
  const [btnDisable, setBtnDisable] = useState(true);

  const navigate = useNavigate();

  const tryLogin = async (e) => {
    e.preventDefault();

    const login = await apiRequestLogin({ email, password });
    console.log(login);

    setUser(login);

    if (login.role === 'customer') {
      console.log(user);
      setOnLocalStorage('user', login);
      navigate('../customer/products', { replace: true });
    }
    if (login.role === 'administrator') {
      setOnLocalStorage('user', login);
      navigate('../admin/manage', { replace: true });
    }
  };

  useEffect(() => {
    function buttonAble() {
      const validEmail = /\S+@\S+\.\S+/;
      const minOfCaracteres = 6;
      if (validEmail.test(email) && password.length >= minOfCaracteres) {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    }
    buttonAble();
  }, [email, password]);

  return (
    <style.CommonContainer>
      <style.LoginContainer />
      <style.CommonForm>
        <style.InputLabel>
          Login
          <br />
          <input
            type="text"
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_login__input-email"
          />
        </style.InputLabel>
        <style.InputLabel>
          Senha
          <br />
          <input
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_login__input-password"
          />
        </style.InputLabel>
        <style.LoginButton
          type="submit"
          data-testid="common_login__button-login"
          disabled={ btnDisable }
          onClick={ (e) => tryLogin(e) }
        >
          Login
        </style.LoginButton>
        <style.RegisterButton
          type="submit"
          data-testid="common_login__button-register"
          onClick={ () => navigate('../register', { replace: true }) }
        >
          Ainda nao tenho conta
        </style.RegisterButton>
        <p
          id="erro"
          data-testid="common_login__element-invalid-email"
        >
          {' '}
          { erro ? 'Deu erro' : ' ' }
        </p>

      </style.CommonForm>
    </style.CommonContainer>
  );
}

// Agradecimento a Cleber Teixeira Turma 9 - Tribo B, pelo regex
