/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'cliente',
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateData = () => {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;
    const MIN_LEN_NAME = 12;

    if (
      validation.test(register.email)
      && register.password.length >= MIN_LEN_PASS
      && register.name.length >= MIN_LEN_NAME
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const changeState = ({ target: { name, value } }) => {
    setRegister({ ...register, [name]: value });
    validateData();
  };

  const lintChato = 'common_register__element-invalid-email';

  useEffect(() => {
    validateData();
  }, [register, validateData]);

  const getApi = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/register',
        register,
      );

      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (e) {
      setErrorMessage(e.response.data.message);
      console.log(e.response.data.message);

      setIsError(true);
    }
  };

  return (
    <div>
      <h1>Register page</h1>

      <label htmlFor="name-register">
        Nome
        <input
          type="text"
          id="name-register"
          name="name"
          data-testid="common_register__input-name"
          onChange={ changeState }
          value={ register.name }
        />
      </label>
      <label htmlFor="email-register">
        Email
        <input
          type="email"
          id="email-register"
          name="email"
          data-testid="common_register__input-email"
          onChange={ changeState }
        />
      </label>

      <label htmlFor="password-register">
        Senha
        <input
          type="password"
          id="password-register"
          name="password"
          data-testid="common_register__input-password"
          onChange={ changeState }
        />
      </label>

      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ () => getApi() }
        disabled={ disableBtn }
      >
        Register
      </button>

      {isError && <div data-testid={ lintChato }>{errorMessage}</div>}
    </div>
  );
}

export default Register;
