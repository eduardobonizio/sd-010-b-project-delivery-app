import React from 'react';
import Proptypes from 'prop-types';

function LoginButton(props) {
  const { dispatchOnSubmit, disabled } = props;
  return (
    <button
      data-testid="common_login__button-login"
      disabled={ disabled }
      onClick={ dispatchOnSubmit }
      type="button"
    >
      LOGIN
    </button>
  );
}

export default LoginButton;

LoginButton.propTypes = {
  dispatchOnSubmit: Proptypes.func.isRequired,
  disabled: Proptypes.bool.isRequired,
};
