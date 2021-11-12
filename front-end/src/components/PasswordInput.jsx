import React from 'react';
import Proptypes from 'prop-types';

function PasswordInput(props) {
  const { setStatePassword, passwordTestId } = props;
  return (
    <label htmlFor="password">
      Senha
      <input
        data-testid={ passwordTestId }
        onChange={ (e) => {
          setStatePassword(e.target.value);
        } }
        type="password"
      />
    </label>
  );
}

export default PasswordInput;

PasswordInput.propTypes = {
  passwordTestId: Proptypes.string.isRequired,
  setStatePassword: Proptypes.func.isRequired,
};
