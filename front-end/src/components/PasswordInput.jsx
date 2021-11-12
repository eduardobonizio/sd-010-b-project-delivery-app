import React from 'react';
import Proptypes from 'prop-types';

function PasswordInput(props) {
  const { setStatePassword, changeDisabled } = props;
  return (
    <label htmlFor="password">
      Senha
      <input
        data-testid="common_login__input-password"
        onChange={ (e) => {
          setStatePassword(e.target.value);
          changeDisabled();
        } }
        type="password"
      />
    </label>
  );
}

export default PasswordInput;

PasswordInput.propTypes = {
  setStatePassword: Proptypes.func.isRequired,
  changeDisabled: Proptypes.func.isRequired,
};
