import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';
import ErrorRegister from '../components/ErrorRegister';

function Register() {
  const [isDisable, setIsDisable] = useState(true);
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    handleClick,
  } = useContext(Context);

  useEffect(() => {
    const isValid = () => {
      const validEmail = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
      const minLength = 6;
      const maxLength = 12;
      const validName = name.length < maxLength;
      const validPassword = password.length >= minLength;

      if (validName && validEmail) {
        if (validPassword) {
          setIsDisable(false);
        }
      } else {
        setIsDisable(true);
      }
    };

    isValid();
  }, [name, email, password, isDisable]);

  return (
    <form action="">
      <input
        data-testid="common_register__input-name"
        type="text"
        name="nameInput"
        placeholder="Entre com um nome"
        onChange={ ({ target }) => setName(target.value) }
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        name="loginInput"
        placeholder="Entre com um e-mail"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        name="passwordInput"
        placeholder="Entre com uma senha"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <input
        data-testid="common_register__button-register"
        type="button"
        value="Cadastrar"
        disabled={ isDisable }
        onClick={ ({ target }) => handleClick(target.value) }
      />
      { errorMsg ? <ErrorRegister /> : '' }
    </form>
  );
}

export default Register;
