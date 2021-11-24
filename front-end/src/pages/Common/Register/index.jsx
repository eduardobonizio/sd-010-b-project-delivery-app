import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCreateUser from '../../../services/register/apiRequestRegister';
import * as style from './style';

export default function Register() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro] = useState();

  const navigate = useNavigate();

  const tryRegister = async (e) => {
    e.preventDefault();

    const register = await apiCreateUser({ name, email, password, role: 'customer' });

    if (register.token) navigate('../customer/products', { replace: true });
    // register
  };

  useEffect(() => {
    function buttonAble() {
      const validEmail = /\S+@\S+\.\S+/;
      const minOfCaracteres = 6;
      const minName = 12;

      if (name.length >= minName
        && password.length >= minOfCaracteres
        && validEmail.test(email)) {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    }
    buttonAble();
  }, [name, email, password]);

  return (
    <style.CommonContainer>
      <style.RegisterContainer />
      <style.CommonForm>
        <div id="inputs-group">
          <h1>Cadastre-se</h1>
          <style.InputLabel>
            Nome
            <br />
            <style.Input
              type="text"
              data-testid="common_register__input-name"
              onChange={ (e) => setName(e.target.value) }
            />
          </style.InputLabel>
          <style.InputLabel>
            Email
            <br />
            <style.Input
              type="text"
              data-testid="common_register__input-email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </style.InputLabel>
          <style.InputLabel>
            Password
            <br />
            <style.Input
              type="password"
              data-testid="common_register__input-password"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </style.InputLabel>

          <style.RegisterButton
            type="submit"
            disabled={ btnDisable }
            data-testid="common_register__button-register"
            onClick={ (e) => tryRegister(e) }
          >
            Cadastrar
          </style.RegisterButton>
          <style.LoginButton
            type="submit"
            data-testid="common_login__button-register"
            onClick={ () => navigate('../login', { replace: true }) }
          >
            Fazer login
          </style.LoginButton>
        </div>
        <p data-testid="common_register__element-invalid_register">
          { erro ? 'Falhou' : ' '}
        </p>
      </style.CommonForm>
    </style.CommonContainer>
  );
}
