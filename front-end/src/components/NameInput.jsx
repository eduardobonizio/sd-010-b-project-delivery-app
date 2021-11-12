import React from 'react';
import Proptypes from 'prop-types';

function NameInput(props) {
  const { setStateEmail } = props;
  return (
    <label htmlFor="email-input">
      Login
      <input
        id="email-input"
        data-testid="common_login__input-email"
        onChange={ (e) => {
          setStateEmail(e.target.value);
        } }
        type="text"
      />
    </label>
  );
}

export default NameInput;

NameInput.propTypes = {
  setStateEmail: Proptypes.func.isRequired,
};
