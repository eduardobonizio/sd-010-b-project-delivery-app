/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateIfFieldsAreCorrect } from '../helper/verifyForm/admin_registerUser';

const CreateUserFormErrorMessages = ({ user }) => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log('user', user);
  }, [user]);
  // const { name, email, password, role } = user;
  console.log('bah', user, validateIfFieldsAreCorrect, setErrors);

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
