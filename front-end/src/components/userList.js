/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import fetchAllUsers from '../services/allUsersAPI';
import deleteUsersAPI from '../services/deleteUsersAPI';

const AOS_ANIMATION_DELAY = 150;

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

  const span = 'h-10 items-center justify-center text-center pt-2';
  return (
    <section>
      <h2
        className="inline-flex p-2 mt-4 mb-5 ml-20 text-3xl border-b-2 border-yellow-color"
      >
        Lista de usuarios
      </h2>
      <ul className="mb-40">
        { users.length > 1
          ? users.map((el, idx) => (
            <li
              data-aos="fade-up"
              data-aos-delay={ idx * AOS_ANIMATION_DELAY }
              data-aos-duration="1000"
              className="flex mx-20 my-5 justify-evenly"
              key={ el.id }
            >
              <div
                className="flex items-center justify-between border-2 rounded-lg min-w-width-li bg-yellow-color border-yellow-color"
              >
                <span
                  className={ `${span} w-40` }
                  data-testid={ `admin_manage__element-user-table-item-number-${el.id}` }
                >
                  { users.indexOf(el) + 1 }
                </span>
                <span
                  className={ `${span} w-80 m-auto bg-white` }
                  data-testid={ `admin_manage__element-user-table-name-${el.id}` }
                >
                  { el.name }
                </span>
                <span
                  className={ `${span} w-80 m-auto bg-white` }
                  data-testid={ `admin_manage__element-user-table-email-${el.id}` }
                >
                  { el.email }
                </span>
                <span
                  className={ `${span} w-40` }
                  data-testid={ `admin_manage__element-user-table-role-${el.id}` }
                >
                  { el.role }
                </span>
              </div>
              <button
                className="w-40 bg-dark-color rounded-xl text-yellow-color"
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
