import React from 'react';
import PropTypes from 'prop-types';

function RegisterButton({ buttonStatus, registerInfo }) {
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

  const updateButtonStatus = ({ nome, email, senha }) => {
    if (!validarNome(nome) || !validarEmail(email) || !validarSenha(senha)) {
      return true;
    }

    return false;
  };

  updateButtonStatus(registerInfo);

  return (
    <button
      type="button"
      data-testid="common_register__button-register"
      disabled={ buttonStatus }
    >
      Registrar-se
    </button>
  );
}

RegisterButton.propTypes = {
  buttonStatus: PropTypes.bool.isRequired,
  registerInfo: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    senha: PropTypes.string,
  }).isRequired,
};

export default RegisterButton;
