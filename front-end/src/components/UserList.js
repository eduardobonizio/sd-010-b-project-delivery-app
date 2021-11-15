import React, { useEffect, useState } from 'react';
import fetchAllUsers from '../services/allUsersAPI';
import deleteUsersAPI from '../services/deleteUsersAPI';

export default function Menu() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchAllUsers();
      setUsers(data);
    };
    getUsers();
  }, [users]);

  const userADM = (role) => {
    if (role === 'administrator') return true;
  };

  const deleteUser = async (evt) => {
    await deleteUsersAPI(evt);
  };

  return (
    <section>
      <h2>Lista de usuarios</h2>
      <ul>
        { users.length > 1
          ? users.map((el) => (
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
                disabled={ userADM(el.role) }
                onClick={ () => deleteUser(el.id) }
                type="button"
                data-testid="admin_manage__element-user-table-remove-"
              >
                Excluir
              </button>
            </li>
          ))
          : ''}

      </ul>
    </section>

  );
}
