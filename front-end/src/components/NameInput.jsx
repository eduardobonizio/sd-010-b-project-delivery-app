import React from 'react';
import Proptypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function NameInput(props) {
  const { setStateName, nameTestId } = props;
  return (
    <Form.Label>
      Nome
      <Form.Control
        id="name-input"
        data-testid={ nameTestId }
        onChange={ (e) => {
          setStateName(e.target.value);
        } }
        type="text"
      />
    </Form.Label>
  );
}

export default NameInput;

NameInput.propTypes = {
  nameTestId: Proptypes.string.isRequired,
  setStateName: Proptypes.func.isRequired,
};
