import React, { useState } from 'react';
import RegisterButton from './RegisterButton';

function RegisterForm() {
  const [registerInfo, setRegisterInfo] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  console.log(registerInfo);
  const [buttonStatus, setButtonStatus] = useState(true);

  const ableButton = () => {
    const isValid = validate();
    if (isValid) {
      setButtonStatus(!buttonStatus);
    } else setButtonStatus(!buttonStatus);
  };

  const handleRegisterForm = ({ target }) => {
    const { name, value } = target;
    setRegisterInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    ableButton();
  };

  return (
    <form>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          name="nome"
          placeholder="Insira seu nome"
          data-testid="common_register__input-name"
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="Insira seu email"
          data-testid="common_register__input-email"
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          data-testid="common_register__input-password"
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <RegisterButton buttonStatus={ buttonStatus } registerInfo={ registerInfo } />
    </form>);
}

export default RegisterForm;
