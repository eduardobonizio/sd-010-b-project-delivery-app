import React from 'react';
import PropTypes from 'prop-types';

export default function TableUsers({ id, name, email, role }) {
  return (
    <table>
      <tr>
        <th> item </th>
        <th> nome </th>
        <th> email </th>
        <th> tipo </th>
        <th> excluir </th>
      </tr>
      <tr>
        <td data-testid={ `admin_manage__element-user-table-item-number-${id}` }>
          {' '}
          { id }
        </td>
        <td data-testid={ `admin_manage__element-user-table-name-${id}` }>
          {' '}
          { name }
        </td>
        <td data-testid={ `admin_manage__element-user-table-email-${id}` }>
          {' '}
          { email }
        </td>
        <td data-testid={ `admin_manage__element-user-table-role-${id}` }>
          {' '}
          { role }
        </td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${id}` }
        >
          Excluir
        </button>
      </tr>
    </table>
  );
}

TableUsers.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
