import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ input }) {
  const errorMessages = {
    nome: 'Seu nome precisa ter no mínimo 12 caracteres',
    senha: 'Sua senha precisa ter no mínimo 6 caraceteres',
    email: 'Seu email',
  };

  return (
    <span data-testid="common_register__element-invalid_register">
      {`${errorMessages[input]}`}
    </span>
  );
}

ErrorMessage.propTypes = {
  input: PropTypes.string.isRequired,
};

export default ErrorMessage;
