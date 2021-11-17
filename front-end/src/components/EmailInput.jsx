import React from 'react';
import Proptypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function EmailInput(props) {
  const { setStateEmail, emailTestId, title } = props;
  return (
    <Form.Label>
      { title }
      <Form.Control
        id="email-input"
        data-testid={ emailTestId }
        onChange={ (e) => {
          setStateEmail(e.target.value);
        } }
        type="text"
      />
    </Form.Label>
  );
}

export default EmailInput;

EmailInput.propTypes = {
  title: Proptypes.string.isRequired,
  emailTestId: Proptypes.string.isRequired,
  setStateEmail: Proptypes.func.isRequired,
};
