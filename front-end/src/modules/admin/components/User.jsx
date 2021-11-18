import React from 'react';
import PropTypes from 'prop-types';

function User({ item, name, email, roleUser, onDelete, index }) {
  console.log(onDelete);
  return (
    <div>
      <span
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { item }
      </span>
      <span
        data-testid={ `admin_manage__element-user-table-name--${index}` }
      >
        {name}
      </span>
      <span
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {email}
      </span>
      <span
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {roleUser}
      </span>
      <button
        type="button"
        data-testid={ `admin_manage__element-user-table-remove-${index}` }
      >
        Excluir
      </button>
    </div>
  );
}

export default User;

User.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  roleUser: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
