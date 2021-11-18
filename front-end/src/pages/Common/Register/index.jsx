import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCreateUser from '../../../services/register/apiRequestRegister';

/* eslint-disable */
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
    <>
      <h1>Cadastro</h1>
      <div display="row">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            data-testid="common_register__input-password"
            placeholder="******"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          CADASTRAR
        </button>
        <p>{' '}</p>
      </div>
    </>
  );
}
