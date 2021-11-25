import React, { useContext, useEffect } from 'react';
import { getAllUsers, removeUser,
} from '../services/apis/getAllUsers';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import Context from '../context/Context';
import * as S from '../styles/Admin';

function ListUser() {
  const { allUsers, setAllUsers } = useContext(Context);
  useEffect(() => {
    const getUsers = async () => {
      const { token } = getFromLocalStorage('user');
      const users = await getAllUsers(token);
      setAllUsers(users);
    };
    getUsers();
  }, [setAllUsers]);

  const deleteUser = async (id) => {
    const { token } = getFromLocalStorage('user');
    const newUsers = allUsers.filter((user) => user.id !== id);
    await removeUser(id, token);
    setAllUsers(newUsers);
  };

  return (
    <main>
      <S.ulUsers>
        {allUsers.map(({ id, name, email, role }, index) => (

          <S.liUsers key={ index }>
            <h3
              data-testid={ `admin_manage__element-user-table-item-number-${id}` }
            >
              { index + 1 }
            </h3>
            <h3
              data-testid={ `admin_manage__element-user-table-name-${id}` }
            >
              { name }
            </h3>
            <h3
              data-testid={ `admin_manage__element-user-table-email-${id}` }
            >
              { email }
            </h3>
            <h3
              data-testid={ `admin_manage__element-user-table-role-${id}` }
            >
              { role }
            </h3>
            <button
              onClick={ () => deleteUser(id) }
              type="button"
              data-testid={ `admin_manage__element-user-table-remove-${id}` }
            >
              Excluir
            </button>
          </S.liUsers>))}
      </S.ulUsers>

    </main>
  );
}

export default ListUser;
