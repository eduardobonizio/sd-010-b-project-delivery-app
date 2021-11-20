import React from 'react';
import Proptypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function PasswordInput(props) {
  const { setStatePassword, passwordTestId } = props;
  return (
    <Form.Label>
      Senha
      <Form.Control
        data-testid={ passwordTestId }
        onChange={ (e) => {
          setStatePassword(e.target.value);
        } }
        type="password"
      />
    </Form.Label>
  );
}

export default PasswordInput;

PasswordInput.propTypes = {
  passwordTestId: Proptypes.string.isRequired,
  setStatePassword: Proptypes.func.isRequired,
};
