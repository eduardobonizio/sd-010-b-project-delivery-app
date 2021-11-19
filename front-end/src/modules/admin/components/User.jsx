import React from 'react';
import PropTypes from 'prop-types';

function User({ item, name, email, roleUser, onDelete, index }) {
  console.log(onDelete);
  return (
    <div className="row user-item">
      <div className="col">
        <span
          data-testid={ `admin_manage__element-user-table-item-number-${index}` }
        >
          { item }
        </span>
      </div>
      <div className="col">
        <span
          data-testid={ `admin_manage__element-user-table-name--${index}` }
        >
          {name}
        </span>
      </div>
      <div className="col">
        <span
          data-testid={ `admin_manage__element-user-table-email-${index}` }
        >
          {email}
        </span>
      </div>
      <div className="col">
        <span
          data-testid={ `admin_manage__element-user-table-role-${index}` }
        >
          {roleUser}
        </span>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-warning w-100"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
        >
          Excluir
        </button>
      </div>
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
