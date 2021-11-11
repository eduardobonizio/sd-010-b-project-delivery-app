import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { id, className, formbtn, value, testId, onClick, disabled } = props;
  return (
    <button
      type={ formbtn ? 'submit' : 'button' }
      id={ id }
      className={ className }
      data-testid={ testId }
      onClick={ onClick }
      disabled={ disabled }
    >
      { value }
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  formbtn: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
