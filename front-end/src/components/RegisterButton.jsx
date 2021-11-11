import React from 'react';
import PropTypes from 'prop-types';

function RegisterButton({ buttonStatus }) {
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
  state: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    senha: PropTypes.string,
  }).isRequired,
};

export default RegisterButton;
