import React, { useContext, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import ErrorMessage from './ErrorMessage';

function RegisterForm() {
  const { validarNome, validarSenha, validarEmail } = useContext(DeliveryContext);

  const [registerInfo, setRegisterInfo] = useState({
    nome: '',
    email: '',
    senha: '',
  });

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

  const { nome, senha, email } = registerInfo;
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
        {
          !validarNome(nome)
            ? <ErrorMessage input="nome" />
            : null
        }
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
        {
          !validarEmail(email)
            ? <ErrorMessage input="email" />
            : null
        }
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
        {
          !validarSenha(senha)
            ? <ErrorMessage input="senha" />
            : null
        }
      </label>
      <button type="button" disabled={ ableButton() }>Registra-se</button>
    </form>);
}

export default RegisterForm;
