import React, { useContext, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function RegisterButton() {
  const { registerForm } = useContext(DeliveryContext);
  const [ableButton, setAbleButton] = useState(true);

  console.log(registerForm);

  const validarNome = (nome) => {
    const NAME_LENGTH = 12;
    if (nome.length < NAME_LENGTH) return false;

    return true;
  };

  const validarEmail = (email) => {
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;

    if (!emailTester.test(email)) return false;

    return true;
  };

  const validarSenha = (senha) => {
    const SENHA_LENGTH = 6;

    if (senha.length < SENHA_LENGTH) return false;

    return true;
  };

  const validFormData = ({ nome, email, senha }) => {
    if (!validarNome(nome) || !validarEmail(email) || !validarSenha(senha)) {
      return true;
    }

    return false;
  };



  return (
    <button
      type="button"
      data-testid="common_register__button-register"
      disabled={ ableButton }
    >
      Registrar-se
    </button>
  );
}

export default RegisterButton;
