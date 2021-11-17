import React from 'react';
import PropTypes from 'prop-types';

function InputText({ controlName, fieldLabelName, dataTestId }) {
  return (
    <label htmlFor={ controlName } className="order-address-details-field">
      { fieldLabelName }
      <input
        type="text"
        name={ controlName }
        id={ controlName }
        className="p-10"
        data-testid={ dataTestId }
      />
    </label>
  );
}

InputText.propTypes = {
  controlName: PropTypes.string.isRequired,
  fieldLabelName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default InputText;
