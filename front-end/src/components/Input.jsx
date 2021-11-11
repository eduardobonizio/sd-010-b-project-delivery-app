import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { id, name, testId, type, placeholder, onChange } = props;
  return (
    <label htmlFor={ id }>
      { name }
      <br />
      <input
        data-testeid={ testId }
        id={ id }
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.function,
}.isRequired;

export default Input;
