import React from 'react';
import Proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function LoginButton(props) {
  const { dispatchOnSubmit, disabled } = props;
  return (
    <Button
      variant="success"
      data-testid="common_login__button-login"
      disabled={ disabled }
      onClick={ dispatchOnSubmit }
      type="button"
    >
      LOGIN
    </Button>
  );
}

export default LoginButton;

LoginButton.propTypes = {
  dispatchOnSubmit: Proptypes.func.isRequired,
  disabled: Proptypes.bool.isRequired,
};
