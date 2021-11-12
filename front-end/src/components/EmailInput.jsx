import React from 'react';
import Proptypes from 'prop-types';

function EmailInput(props) {
  const { setStateEmail, emailTestId, title } = props;
  return (
    <label htmlFor="email-input">
      { title }
      <input
        id="email-input"
        data-testid={ emailTestId }
        onChange={ (e) => {
          setStateEmail(e.target.value);
        } }
        type="text"
      />
    </label>
  );
}

export default EmailInput;

EmailInput.propTypes = {
  title: Proptypes.string.isRequired,
  emailTestId: Proptypes.string.isRequired,
  setStateEmail: Proptypes.func.isRequired,
};
