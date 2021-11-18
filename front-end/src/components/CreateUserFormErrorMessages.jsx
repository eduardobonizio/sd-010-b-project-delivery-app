/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateIfFieldsAreCorrect } from '../helper/verifyForm/admin_registerUser';

const CreateUserFormErrorMessages = ({ user }) => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log('user', user);
    const data = validateIfFieldsAreCorrect(user);
    if (data[0] !== true) return setErrors(data);
  }, [user]);

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
};
