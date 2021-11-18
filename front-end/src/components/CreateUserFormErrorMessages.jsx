import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateIfFieldsAreCorrect } from '../helper/verifyForm/admin_registerUser';

const CreateUserFormErrorMessages = ({ user, errors, setErrors }) => {
  useEffect(() => {
    const data = validateIfFieldsAreCorrect(user);
    console.log('data', data);
    if (data !== true) return setErrors(data.filter((el) => el !== true));
    return setErrors([]);
  }, [setErrors, user]);

  return (
    <ul>
      { errors.length > 0 && errors.map((el, index) => (
        <li key={ index }>{el}</li>
      ))}
    </ul>
  );
};

export default CreateUserFormErrorMessages;

CreateUserFormErrorMessages.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setErrors: PropTypes.func.isRequired,
};
