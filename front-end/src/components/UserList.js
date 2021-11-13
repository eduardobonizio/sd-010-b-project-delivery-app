import React, { useEffect, useState } from 'react';
import fetchAllUsers from '../services/allUsersAPI';

export default function Menu() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchAllUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <section>
      <h2>Lista de usuarios</h2>
      <ul>
        {users.map((el) => (
          <li key={ el.id }>
            <span
              data-testid="admin_manage__element-user-table-item-number-"
            >
              { users.indexOf(el) + 1 }
            </span>
            { ' - ' }
            <span
              data-testid="admin_manage__element-user-table-name-"
            >
              { el.name }
            </span>
            { ' - ' }
            <span
              data-testid="admin_manage__element-user-table-email-"
            >
              { el.email }
            </span>
            { ' - ' }
            <span
              data-testid="admin_manage__element-user-table-role-"
            >
              { el.role }
            </span>
            { ' - ' }
            <button
              type="button"
              data-testid="admin_manage__element-user-table-remove-"
            >
              Excluir
            </button>
          </li>
        ))}

      </ul>
    </section>

  );
}
