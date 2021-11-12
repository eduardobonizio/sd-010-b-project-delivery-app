import React from 'react';
import PropTypes from 'prop-types';

function User({ item, name, email, status, onDelete }) {
  console.log(onDelete);
  return (
    <div>
      <span>{item}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{status}</span>
      <button type="button">Excluir</button>
    </div>
  );
}

export default User;

User.propTypes = {
  item: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
