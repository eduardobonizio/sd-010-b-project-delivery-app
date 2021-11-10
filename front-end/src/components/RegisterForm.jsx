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
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <label htmlFor="nome">
        Email
        <input
          type="email"
          name="email"
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <label htmlFor="nome">
        Senha
        <input
          type="password"
          name="senha"
          onChange={ (event) => handleRegisterForm(event) }
        />
      </label>
      <RegisterButton />
    </form>);
}

export default RegisterForm;
