import React from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function LoginErrorMessage({ hideErrorMessage }) {
  return (
    <Alert variant="warning" hidden={ hideErrorMessage }>
      Usuário/Senha inválidos
    </Alert>
  );
}

export default LoginErrorMessage;

LoginErrorMessage.propTypes = {
  hideErrorMessage: Proptypes.bool.isRequired,
};
