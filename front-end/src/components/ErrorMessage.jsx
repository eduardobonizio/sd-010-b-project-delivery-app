import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ input }) {
  const errorMessages = {
    nome: 'O nome precisa ter no mínimo 12 caracteres',
    senha: 'A senha precisa ter no mínimo 6 caraceteres',
    email: 'Precisa ser um email válido',
    'invalid-data': 'Usuário já cadastrado ou dados inválidos',
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
