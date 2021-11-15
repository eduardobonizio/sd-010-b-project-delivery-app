import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import * as style from './style';
import { apiRequestLogin } from '../../../services/login/apiRequestLogin';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [erro] = useState();
  const [user, setUser] = useState();
  const [btnDisable, setBtnDisable] = useState(true);

  const history = useHistory();

  const tryLogin = async (e) => {
    // if (!user);
    e.preventDefault();

    const login = await apiRequestLogin({ email, password });
    setUser(login);
    // console.log(login);
    console.log('user: ', user);
    history.push('/customer/products');
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
          {/* <Link to="/customer/products" /> */}
        </style.LoginButton>
        <style.RegisterButton
          type="submit"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda nao tenho conta
          {/* <Link to="/register" /> */}
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
