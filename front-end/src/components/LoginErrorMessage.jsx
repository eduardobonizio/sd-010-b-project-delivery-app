import React from 'react';
import Proptypes from 'prop-types';

function LoginErrorMessage({ hideErrorMessage }) {
  return (
    <span data-testid="common_login__element-invalid-email" hidden={ hideErrorMessage }>
      Usuário/Senha inválidos
    </span>
  );
}

export default LoginErrorMessage;

LoginErrorMessage.propTypes = {
  hideErrorMessage: Proptypes.bool.isRequired,
};
