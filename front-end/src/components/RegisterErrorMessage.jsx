import React from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function LoginErrorMessage({ hidden }) {
  return (
    <Alert
      variant="warning"
      hidden={ hidden }
      data-testid="common_register__element-invalid_register"
    >
      Usuário já existente!
    </Alert>
  );
}

export default LoginErrorMessage;

LoginErrorMessage.propTypes = {
  hidden: Proptypes.bool.isRequired,
};
