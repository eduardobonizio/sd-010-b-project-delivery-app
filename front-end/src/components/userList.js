/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
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
      <h2 className="inline-flex p-2 ml-20 mb-5 text-3xl border-b-2 border-yellow-color">
        Lista de usuarios
      </h2>
      <ul>
        { users.length > 1
          ? users.map((el) => (
            <li className="flex justify-evenly my-5 mx-20" key={ el.id }>
              <div className="flex justify-between items-center min-w-width-li bg-yellow-color space-x-2 border-yellow-color border-2 rounded-lg">
                <span
                  className="px-10 py-3"
                  data-testid={ `admin_manage__element-user-table-item-number-${el.id}` }
                >
                  { users.indexOf(el) + 1 }
                </span>
                <span
                  className="px-10 py-3 bg-white"
                  data-testid={ `admin_manage__element-user-table-name-${el.id}` }
                >
                  <p>{ el.name }</p>
                </span>
                <span
                  className="px-10 py-3 bg-white"
                  data-testid={ `admin_manage__element-user-table-email-${el.id}` }
                >
                  <p>{ el.email }</p>
                </span>
                <span
                  className="px-10 py-3"
                  data-testid={ `admin_manage__element-user-table-role-${el.id}` }
                >
                  <p>{ el.role }</p>
                </span>
              </div>
              <button
                className="bg-dark-color px-10 py-3 rounded-xl text-yellow-color"
                disabled={ userADM(el.role) }
                onClick={ () => deleteUser(el.id) }
                type="button"
                data-testid={ `admin_manage__element-user-table-remove-${el.id}` }
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
