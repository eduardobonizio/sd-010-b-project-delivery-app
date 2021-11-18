import React from 'react';
import PropTypes from 'prop-types';

const CreateUserFormErrorMessages = ({ user }) => {
  const { name, email, password, role } = user;
  return (
    <ul>
      {name}
      {email}
      {password}
      {role}
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
