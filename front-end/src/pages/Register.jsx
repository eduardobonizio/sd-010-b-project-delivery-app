import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../api/api';

import validRegister from '../helpers/validRegister';

function Register() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [error, setError] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const userData = { registerName, registerEmail, registerPassword };
    if (validRegister.validRegister(userData)) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [registerName, registerEmail, registerPassword]);

  const handleInput = ({ target: { name: inputName, value } }) => {
    setIsEmailInvalid(false);
    if (error) setError('');
    switch (inputName) {
    case 'name':
      return setRegisterName(value);
    case 'email':
      return setRegisterEmail(value);
    case 'password':
      return setRegisterPassword(value);
    default:
      return undefined;
    }
  };

  const handleSubmit = async () => {
    const pushUrl = '/register';
    const userData = {
      registerName,
      registerEmail,
      registerPassword,
      role: 'customer',
    };
    await axios.post(pushUrl, userData)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem('user', JSON.stringify({ token, ...user }));
        history.push('/customer/products');
      })
      .catch((err) => {
        setIsEmailInvalid(true);
        console.log(err);
      });
  };

  return (
    <div className="">
      <h1>Cadastro</h1>
      <form action="">
        <div className="">
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              data-testid="common_register__input-name"
              id="name"
              name="name"
              placeholder="Seu nome"
              onChange={ handleInput }
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="email">
            Email:
            <input
              type="text"
              data-testid="common_register__input-email"
              id="email"
              name="email"
              placeholder="seu-email@site.com.br"
              onChange={ handleInput }
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              data-testid="common_register__input-password"
              id="password"
              name="password"
              placeholder="**********"
              onChange={ handleInput }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ btnDisable }
          onClick={ () => handleSubmit() }
        >
          CADASTRAR
        </button>
        {
          error.length > 0 && (
            <span data-testid="common_register__element-invalid_register">
              { error }
            </span>
          )
        }
      </form>
      {isEmailInvalid ? (
        <h4
          data-testid="common_register__element-invalid_register"
        >
          Email ou nome já cadastrado

        </h4>)
        : null}
    </div>
  );
}

export default Register;
