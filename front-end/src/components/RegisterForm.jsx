import React, { useState } from 'react';

function RegisterForm() {
  const [registerInfo, setRegisterInfo] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  console.log(registerInfo);

  // const [buttonStatus, setButtonStatus] = useState(true);

  const validarNome = (nome) => {
    const NAME_LENGTH = 12;
    if (nome.length < NAME_LENGTH) {
      return false;
    }

    return true;
  };

  const validarEmail = (email) => {
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;

    if (!emailTester.test(email)) return false;

    return true;
  };

  const validarSenha = (senha) => {
    const SENHA_LENGTH = 6;

    if (senha.length < SENHA_LENGTH) {
      console.log(senha.length);
      return false;
    }
    return true;
  };

  const ableButton = () => {
    const { nome, senha, email } = registerInfo;

    if (validarNome(nome) && validarSenha(senha) && validarEmail(email)) {
      return false;
    }
    return true;
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
      <button type="button" disabled={ ableButton() }>Registra-se</button>
    </form>);
}

export default RegisterForm;
