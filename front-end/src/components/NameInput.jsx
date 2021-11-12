import React from 'react';
import Proptypes from 'prop-types';

function NameInput(props) {
  const { setStateName, nameTestId } = props;
  return (
    <label htmlFor="name-input">
      Nome
      <input
        id="name-input"
        data-testid={ nameTestId }
        onChange={ (e) => {
          setStateName(e.target.value);
        } }
        type="text"
      />
    </label>
  );
}

export default NameInput;

NameInput.propTypes = {
  nameTestId: Proptypes.string.isRequired,
  setStateName: Proptypes.func.isRequired,
};
