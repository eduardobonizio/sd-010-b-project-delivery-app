import React from 'react';
import Proptypes from 'prop-types';

function LoginButton({ setStateEmail }) {
  return (
    <label htmlFor="email">
      Login
      <input
        name="email"
        id="email"
        data-testid="common_login__input-email"
        onChange={ (e) => setStateEmail(e.target.value) }
        type="text"
      />
    </label>
  );
}

export default LoginButton;

LoginButton.propTypes = {
  setStateEmail: Proptypes.func.isRequired,
};
