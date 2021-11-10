import React, { useContext } from 'react';
import RegisterButton from './RegisterButton';
import DeliveryContext from '../context/DeliveryContext';

function RegisterForm() {
  const { setRegisterForm } = useContext(DeliveryContext);

  const handleRegisterForm = ({ target }) => {
    const { name, value } = target;
    setRegisterForm((oldState) => ({
      ...oldState,
      [name]: value,
    }));
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
      <RegisterButton />
    </form>);
}

export default RegisterForm;
